import prisma from '../config/prisma.js';

const getBookService = async () => {
  const query = await prisma.book.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  return query;
};
const postBookService = async (body) => {
  const query = await prisma.book.create({
    data: body,
  });
  return query;
};
const putBookService = async (body, id) => {
  const query = await prisma.book.update({
    where: {
      id: Number(id),
    },
    data: body,
  });
  return query;
};
const deleteBookService = async (id) => {
  const query = await prisma.book.delete({
    where: {
      id: Number(id),
    },
  });
  return query;
};

export default {
  getBookService,
  postBookService,
  putBookService,
  deleteBookService,
};
