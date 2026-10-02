import categoryServices from '../services/categoryServices.js';

const getAllCategoriesController = async (req, res) => {
  const data = await categoryServices.getAllCategoriesService();
  return res.status(200).json(data);
};

const getCategoryByIdController = async (req, res) => {
  const data = await categoryServices.getCategoryByIdService(req.params.id);
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

const createCategoryController = async (req, res) => {
  const data = await categoryServices.createCategoryService(req.body);
  return res.status(201).json(data);
};

const updateCategoryController = async (req, res) => {
  const data = await categoryServices.updateCategoryService(
    req.body,
    req.params.id,
  );
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

const deleteCategoryController = async (req, res) => {
  const data = await categoryServices.deleteCategoryService(req.params.id);
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

export default {
  getAllCategoriesController,
  getCategoryByIdController,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
