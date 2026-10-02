import productCategoryServices from '../services/productCategoryServices.js';

const getAllProductsCategoryController = async (req, res) => {
  const data = await productCategoryServices.getAllProductsCategoryService();
  return res.status(200).json(data);
};

const getProductCategoryByIdController = async (req, res) => {
  const data = await productCategoryServices.getProductCategoryByIdService(
    req.params.idProduct,
    req.params.idCategory,
  );
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

const createProductCategoryController = async (req, res) => {
  const data = await productCategoryServices.createProductCategoryService(
    req.body,
  );
  return res.status(201).json(data);
};

const createManyProductCategoryController = async (req, res) => {
  const data = await productCategoryServices.createManyProductCategoryService(
    req.body,
  );
  return res.status(201).json(data);
};

const updateProductCategoryController = async (req, res) => {
  const data = await productCategoryServices.updateProductCategoryService(
    req.body,
  );
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

const deleteProductCategoryController = async (req, res) => {
  const data = await productCategoryServices.deleteProductCategoryService(
    req.params.idProduct,
    req.params.idCategory,
  );
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

export default {
  getAllProductsCategoryController,
  getProductCategoryByIdController,
  createProductCategoryController,
  createManyProductCategoryController,
  updateProductCategoryController,
  deleteProductCategoryController,
};
