import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; //Permite encriptar contraseñas

const prisma = new PrismaClient();

const loginService = async (email, password) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    return { Respuesta: 'Credenciales incorrectas' };
  }
  const validatePassword = await passwordCompare(password, user.password);

  if (!validatePassword) {
    return { Respuesta: 'Credenciales incorrectas' };
  }
  return user;
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

const hashPassword = async (password) => {
  const saltRounds = 10; //Entre mas rondas mas segura queda la contraseña, pero mas tiempo tarda
  const hashedPassword = await bcrypt.hash(password, saltRounds); // Serie de caracteres para poner una buena contraseña y también permite comparar
  return hashedPassword;
};

// Para mayor seguridad se debe comparar la contraseña que el usuario envió con la contraseña ofuscada generada por bycript
const passwordCompare = async (password, passwordHashed) => {
  const validPassword = await bcrypt.compare(password, passwordHashed);
  return validPassword;
};

export default {
  loginService,
  postUserService,
};
