import prisma from '../config/prisma.js';

const isValidateTotal = (total) => {
  return Number.isFinite(total) && total > 0;
};

const getAllOrdersService = async () => {
  const data = await prisma.order.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          lastName: true,
          email: true,
        },
      },
    },
    orderBy: {
      id: 'asc',
    },
  });
  return data;
};

const getOrderByIdService = async (id) => {
  const data = await prisma.order.findUnique({
    where: { id: Number(id) },
    include: {
      user: true,
    },
  });
  return data;
};

const createOrderService = async (body) => {
  if (!isValidateTotal(body.total)) {
    throw Error('Total should be a number greater than 0');
  }
  const data = await prisma.order.create({
    data: {
      status: body.status,
      total: body.total,
      user: {
        connect: {
          id: body.idUser,
        },
      },
    },
    include: {
      user: true,
    },
  });
  return data;
};
const createManyOrderService = async (body) => {
  const isTotalChecked = body.every((order) => isValidateTotal(order.total));

  if (!isTotalChecked) {
    throw Error('Total should be a number greater than 0');
  }

  const data = await prisma.order.createMany({
    data: body,
  });

  return data;
};

const updateOrderService = async (body, id) => {
  if (!isValidateTotal(body.total)) {
    throw Error('Total should be a number greater than 0');
  }
  const data = await prisma.order.update({
    where: { id: Number(id) },
    data: {
      status: body.status,
      total: body.total,
    },
  });
  return data;
};

const deleteOrderService = async (id) => {
  const data = await prisma.order.delete({
    where: { id: Number(id) },
  });
  return data;
};

export default {
  getAllOrdersService,
  getOrderByIdService,
  createOrderService,
  createManyOrderService,
  updateOrderService,
  deleteOrderService,
};

// const createUserService = async (body) => {
//   const data = await prisma.user.create({
//     data: {
//       name: body.name,
//       lastName: body.lastName,
//       email: body.email,
//       password: body.password,
//       orders: {
//         create: {
//           status: body.order.status,
//         },
//       },
//     },
//   });
//   return data;
// };
// const createProductService = async (body) => {
//   const data = await prisma.product.create({
//     data: {
//       productName: body.productName,
//       description: body.description,
//       price: body.price,
//       stock: body.stock,
//       productCategories: {
//         create: {
//           category: {
//             connect: {
//               id: body.idCategory,
//             },
//           },
//         },
//       },
//     },
//   });

//   return data;
// };

// const disconnectProductCategoryService = async (idProduct, idCategory) => {
//   const data = await prisma.product.update({
//     where: {
//       id: Number(idProduct),
//     },
//     data: {
//       productCategories: {
//         disconnect: {
//           idProduct_idCategory: {
//             idProduct: Number(idProduct),
//             idCategory: Number(idCategory),
//           },
//         },
//       },
//     },
//   });

//   return data;
// };

// const createOrderService = async (body) => {
//   const data = await prisma.order.create({
//     data: {
//       status: body.status,
//       user: {
//         connect: {
//           id: body.idUser,
//         },
//       },
//     },
//   });
//   return data;
// };
