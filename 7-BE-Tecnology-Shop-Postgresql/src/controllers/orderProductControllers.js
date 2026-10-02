import orderProductServices from '../services/orderProductServices.js';

const getAllOrderProductsController = async (req, res) => {
  const data = await orderProductServices.getAllOrderProductsService();
  return res.status(200).json(data);
};

const getOrderProductByIdController = async (req, res) => {
  const data = await orderProductServices.getOrderProductByIdService(
    req.params.idOrder,
    req.params.idProduct,
  );
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

const createOrderProductController = async (req, res) => {
  const data = await orderProductServices.createOrderProductService(req.body);
  return res.status(201).json(data);
};

const createManyOrderProductController = async (req, res) => {
  const data = await orderProductServices.createManyOrderProductService(
    req.body,
  );
  return res.status(201).json(data);
};

const updateOrderProductController = async (req, res) => {
  const data = await orderProductServices.updateOrderProductService(req.body);
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

const deleteOrderProductController = async (req, res) => {
  const data = await orderProductServices.deleteOrderProductService(
    req.params.idOrder,
    req.params.idProduct,
  );
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

export default {
  getAllOrderProductsController,
  getOrderProductByIdController,
  createOrderProductController,
  createManyOrderProductController,
  updateOrderProductController,
  deleteOrderProductController,
};
