import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAuthorsService = async () => {
  const query = await prisma.author.findMany();
  return query;
};
const postAuthorsService = async (body) => {
  const query = await prisma.author.create({
    data: body,
  });
  return query;
};
const putAuthorsService = async (body, id) => {
  const query = await prisma.author.update({
    where: {
      id: Number(id),
    },
    data: body,
  });
  return query;
};
const deleteAuthorsService = async (id) => {
  const query = await prisma.author.delete({
    where: {
      id: Number(id),
    },
  });
  return query;
};

export default {
  getAuthorsService,
  postAuthorsService,
  putAuthorsService,
  deleteAuthorsService,
};
