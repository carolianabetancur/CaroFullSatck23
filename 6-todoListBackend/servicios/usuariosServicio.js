import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // Estandar para transmitir de forma segura entre dos partes

const prisma = new PrismaClient();
const secret = process.env.JWT_SECRET;

const getUserService = async () => {
  const query = await prisma.user.findMany();
  return query;
};
const postUserService = async (body) => {
  const hashedPassword = await hashPassword(body.password);
  const query = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: hashedPassword,
    },
  });
  return query;
};
const updateUserService = async (body, id) => {
  const hashedPassword = await hashPassword(body.password);
  const query = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: body.name,
      email: body.email,
      password: hashedPassword,
    },
  });
  return query;
};
const deleteUserService = async (id) => {
  const query = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return query;
};

const loginService = async (email, password) => {
  // Autenticación, Peticion al servidor para ver si el usuario existe
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { error: 'Credenciales inválidas' };
  }

  const isValid = await validatePassword(password, user.password);
  if (!isValid) {
    return { error: 'Credenciales inválidas' };
  }
  //Autorización, sar que el usuario puede hacer X solicitudes porque está autorizado de que puede hacerlas
  //Esa autorización se va a validar a través de un token, El cliente hace una solicitud al path de usuario, este genera un token y con esto
  //el cliente puede seguir haciendo solitudes, en cada solicitud se valida que ese token sea el mismo que se emitió
  //Cuenta con 3 partes para generar el toke JWT la primera es el header que contiene info de cómo se firmó ese token: {"alg": "HS256","typ": "JWT"}
  //la segunda payload: Que es la información que codificar, normalmente mediante Base64URL, como el id y usuario
  //y la tercera es el signature, garantiza que el token no ha sido modificado y se genera con la combinación de un secreto y los elementos anteriores

  // Aquí voy a usar la función sign de jwt, que se encarga de tomar el id y el correo (Pueden ser mas datos, pero no las contraseña),
  // el secreto (que está en las variables de entorno) y también podemos generar un tiempo de expiración y generar un token,
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    secret,
    { expiresIn: '1d' },
  );

  return {
    message: 'Inicio exitoso',
    token,
  };
};

const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

const validatePassword = async (password, hashedPassword) => {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
};

export default {
  getUserService,
  postUserService,
  updateUserService,
  deleteUserService,
  loginService,
};
