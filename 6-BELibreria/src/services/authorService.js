import prisma from '../config/prisma.js';

const getAuthorsService = async () => {
  const query = await prisma.author.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  return query;
};
const postAuthorsService = async (body) => {
  const query = await prisma.author.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return query;
};
const putAuthorsService = async (body, id) => {
  const query = await prisma.author.update({
    where: {
      id: Number(id),
    },
    data: {
      name: body.name,
      email: body.email,
    },
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
