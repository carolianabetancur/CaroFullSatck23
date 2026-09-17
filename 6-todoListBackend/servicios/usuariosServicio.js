import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getUserService = async () => {
  const query = await prisma.user.findMany();
  return query;
};
const postUserService = async (body) => {
  const query = await prisma.user.create({
    data: body,
  });
  return query;
};
const updateUserService = async (body, id) => {
  const query = await prisma.user.update({
    where: {
      id: id,
    },
    data: body,
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

export default {
  getUserService,
  postUserService,
  updateUserService,
  deleteUserService,
};
