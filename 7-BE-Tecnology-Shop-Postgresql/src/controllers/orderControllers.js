import orderServices from '../services/orderServices.js';

const getAllOrdersController = async (req, res) => {
  const data = await orderServices.getAllOrdersService();
  console.log(data[9].total, typeof data[9].total);
  return res.status(200).json(data);
};

const getOrderByIdController = async (req, res) => {
  const data = await orderServices.getOrderByIdService(req.params.id);
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

const createOrderController = async (req, res) => {
  const data = await orderServices.createOrderService(req.body);
  return res.status(201).json(data);
};

const createManyOrderController = async (req, res) => {
  const data = await orderServices.createManyOrderService(req.body);
  return res.status(201).json(data);
};

const updateOrderController = async (req, res) => {
  const data = await orderServices.updateOrderService(req.body, req.params.id);
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

const deleteOrderController = async (req, res) => {
  const data = await orderServices.deleteOrderService(req.params.id);
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

export default {
  getAllOrdersController,
  getOrderByIdController,
  createOrderController,
  createManyOrderController,
  updateOrderController,
  deleteOrderController,
};
