import productServices from '../services/productServices.js';

const getAllProductsController = async (req, res) => {
  const data = await productServices.getAllProductsService();
  console.log(data);
  if (!data) {
    return res.status(404).json({ message: 'not found' });
  }
  return res.status(200).json(data);
};

const postProductController = async (req, res) => {
  const data = await productServices.createProductService(req.body);
  return res.status(201).json(data);
};

const updateProductController = async (req, res) => {
  const data = await productServices.updateProductCategoryService(
    req.body,
    req.params.id,
  );
  return res.status(200).json(data);
};

const deleteProductController = async (req, res) => {
  const data = await productServices.deleteProductService(req.params.id);
  return res.status(200).json(data);
};

export default {
  getAllProductsController,
  postProductController,
  updateProductController,
  deleteProductController,
};
