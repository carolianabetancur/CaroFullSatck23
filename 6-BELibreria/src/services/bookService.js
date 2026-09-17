// inicializar en src un proyecto prisma con npx prisma init
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getBookService = async () => {
  const query = await prisma.book.findMany();
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
