import prisma from '../config/prisma.js';

const getAllCategoriesService = async () => {
  const data = await prisma.category.findMany();
  return data;
};

const getCategoryByIdService = async (id) => {
  const data = await prisma.category.findUnique({
    where: { id: Number(id) },
  });
  return data;
};

const createCategoryService = async (body) => {
  const data = await prisma.category.create({
    data: {
      categoryName: body.categoryName,
      description: body.description,
    },
  });
  return data;
};

const updateCategoryService = async (body, id) => {
  const data = await prisma.category.update({
    where: { id: Number(id) },
    data: {
      categoryName: body.categoryName,
      description: body.description,
    },
  });
  return data;
};
const deleteCategoryService = async (id) => {
  const data = await prisma.category.delete({
    where: { id: Number(id) },
  });
  return data;
};

export default {
  getAllCategoriesService,
  getCategoryByIdService,
  createCategoryService,
  updateCategoryService,
  deleteCategoryService,
};
