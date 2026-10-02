import prisma from '../config/prisma.js';

const getAllProductsService = async () => {
  const data = await prisma.product.findMany({
    include: {
      productCategories: {
        include: {
          category: {
            select: {
              id: true,
              categoryName: true,
            },
          },
        },
      },
    },
  });
  return data;
};

const updateProductService = async (body, id) => {
  const data = await prisma.product.update({
    where: { id: Number(id) },
    data: body,
  });
  return data;
};

const deleteProductService = async (id) => {
  const data = await prisma.product.delete({
    where: { id: Number(id) },
  });
  return data;
};

export default {
  getAllProductsService,
  updateProductService,
  deleteProductService,
};

// const getAllProductsWithPriceAndStockService = async () => {
//   const data = await prisma.product.findMany({
//     where: { price: { gte: 500000 }, stock: { gt: 0 } },
//   });
//   return data;
// };
// const getProductByIdService = async () => {
//   const data = await prisma.product.findUnique({
//     where: { id: 3 },
//   });
//   return data;
// };
// const getFirstProductbyStockService = async () => {
//   const data = await prisma.product.findFirst({
//     where: { stock: { gt: 0 } },
//   });
//   return data;
// };
// const getAllProductsWithStockAndOrderByService = async () => {
//   const data = await prisma.product.findMany({
//     where: { stock: { gt: 0 } },
//     orderBy: {
//       price: 'asc',
//     },
//   });
//   return data;
// };
// const getAllProductsWithIdNamePriceStockService = async () => {
//   const data = await prisma.product.findMany({
//     orderBy: {
//       id: 'asc',
//     },
//     skip: 2,
//     take: 2,
//   });
//   return data;
// };

// const connectProductToCategoryService = async (body, id) => {
//   const data = await prisma.product.update({
//     where: {
//       id: Number(id),
//     },
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

// const updateProductCategoryService = async (body, id) => {
//   const data = await prisma.product.update({
//     where: {
//       id: Number(id),
//     },
//     data: {
//       productCategories: {
//         create: {
//           category: {
//             connect: {
//               id: 3,
//             },
//           },
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
//         //Crear ProductCategory
//         create: {
//           category: {
//             // Conecta Category existente
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
