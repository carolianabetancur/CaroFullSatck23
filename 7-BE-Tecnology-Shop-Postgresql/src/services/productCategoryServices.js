import prisma from '../config/prisma.js';

const isPositiveInteger = (value) => {
  const numberValue = Number(value);

  return Number.isInteger(numberValue) && numberValue > 0;
};

const getAllProductsCategoryService = async () => {
  const data = await prisma.productCategory.findMany({
    orderBy: [{ idProduct: 'asc' }, { idCategory: 'asc' }],
  });
  return data;
};

const getProductCategoryByIdService = async (idProduct, idCategory) => {
  const data = await prisma.productCategory.findUnique({
    where: {
      idProduct_idCategory: {
        idProduct: Number(idProduct),
        idCategory: Number(idCategory),
      },
    },
  });
  return data;
};

const createProductCategoryService = async (body) => {
  if (
    !isPositiveInteger(body.idProduct) ||
    !isPositiveInteger(body.idCategory)
  ) {
    throw new Error('idProduct e idCategory deben ser enteros positivos');
  }
  const data = await prisma.productCategory.create({
    data: {
      idProduct: Number(body.idProduct),
      idCategory: Number(body.idCategory),
    },
  });
  return data;
};

const createManyProductCategoryService = async (body) => {
  const isValid = body.every(
    (item) =>
      isPositiveInteger(item.idProduct) && isPositiveInteger(item.idCategory),
  );

  if (!isValid) {
    throw new Error('idProduct e idCategory deben ser enteros positivos');
  }

  const data = await prisma.productCategory.createMany({
    data: body.map((item) => ({
      idProduct: Number(item.idProduct),
      idCategory: Number(item.idCategory),
    })),
  });

  return data;
};

const updateProductCategoryService = async (body) => {
  const data = await prisma.$transaction(async (tx) => {
    await tx.productCategory.delete({
      where: {
        idProduct_idCategory: {
          idProduct: Number(body.idProduct),
          idCategory: Number(body.idCategory),
        },
      },
    });

    const newProductCategory = await tx.productCategory.create({
      data: {
        idProduct: Number(body.idProduct),
        idCategory: Number(body.newIdCategory),
      },
    });

    return newProductCategory;
  });

  return data;
};
const deleteProductCategoryService = async (idProduct, idCategory) => {
  const data = await prisma.productCategory.delete({
    where: {
      idProduct_idCategory: {
        idProduct: Number(idProduct),
        idCategory: Number(idCategory),
      },
    },
  });
  return data;
};

export default {
  getAllProductsCategoryService,
  getProductCategoryByIdService,
  createProductCategoryService,
  createManyProductCategoryService,
  updateProductCategoryService,
  deleteProductCategoryService,
};
