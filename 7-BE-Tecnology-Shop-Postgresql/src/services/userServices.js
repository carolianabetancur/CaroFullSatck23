import prisma from '../config/prisma.js';

const getAllUsersService = async () => {
  const data = await prisma.user.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  return data;
};

const getUserByIdService = async (id) => {
  const data = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  return data;
};

const createUserService = async (body) => {
  const data = await prisma.user.create({
    data: {
      name: body.name,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
    },
  });
  return data;
};

const createManyUsersService = async (body) => {
  const data = await prisma.user.createMany({
    data: body,
  });
  return data;
};

const updateUserService = async (body, id) => {
  const data = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      name: body.name,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
    },
  });
  return data;
};

//UpdateMany() tradicional, porque updateMany() aplica el mismo data a todos los registros encontrados.
const updateManyUsersService = async (body) => {
  const data = await prisma.user.updateMany({
    where: {
      id: {
        in: body.ids,
      },
    },
    data: {
      name: body.name,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
    },
  });

  return data;
};

// Transaction si nos va a permitir que el update actualice varios registros con data diferente, lo que hace es hacer un conjunto de transacciones
// en este caso de updates
const updateUsersTransactionService = async (body) => {
  const data = await prisma.$transaction(
    body.map((user) =>
      prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
        },
      }),
    ),
  );

  return data;
};

const deleteUserService = async (id) => {
  const data = await prisma.user.delete({
    where: { id: Number(id) },
  });
  return data;
};

const deleteManyUsersService = async (body) => {
  const data = await prisma.user.deleteMany({
    where: {
      id: {
        in: body.ids,
      },
    },
  });

  return data;
};

export default {
  getAllUsersService,
  getUserByIdService,
  createUserService,
  createManyUsersService,
  updateUserService,
  updateManyUsersService,
  updateUsersTransactionService,
  deleteUserService,
  deleteManyUsersService,
};
