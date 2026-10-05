import 'dotenv/config';
import prisma from '../config/prisma.js';
import bcrypt from 'bcrypt'; //Permite encriptar contraseñas
import jwt from 'jsonwebtoken'; // Estandar para transmitir de forma segura entre dos partes

const secret = process.env.JWT_SECRET;

const getUserService = async () => {
  const query = await prisma.user.findMany();
  return query;
};

const postUserService = async (email, password) => {
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  return user;
};

const updateUserService = async (body, id) => {
  const hashedPassword = await hashPassword(body.password);
  const query = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
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
  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (!user) {
    return { error: 'Credenciales inválidas' };
  }

  const isValid = await validatePassword(password, user.password);
  if (!isValid) {
    return { error: 'Credenciales inválidas' };
  }

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
