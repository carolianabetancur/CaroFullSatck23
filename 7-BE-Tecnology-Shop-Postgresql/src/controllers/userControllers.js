import userServices from '../services/userServices.js';

const getAllUsersController = async (req, res) => {
  const data = await userServices.getAllUsersService();
  return res.status(200).json(data);
};

const getUserByIdController = async (req, res) => {
  const data = await userServices.getUserByIdService(req.params.id);
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

const createUserController = async (req, res) => {
  const data = await userServices.createUserService(req.body);
  return res.status(201).json(data);
};

const createManyUsersController = async (req, res) => {
  const data = await userServices.createManyUsersService(req.body);
  return res.status(201).json(data);
};

const updateUserController = async (req, res) => {
  const data = await userServices.updateUserService(req.body, req.params.id);
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

const updateManyUsersController = async (req, res) => {
  const data = await userServices.updateManyUsersService(req.body);
  return res.status(200).json(data);
};

const updateUsersTransactionController = async (req, res) => {
  const data = await userServices.updateUsersTransactionService(req.body);
  return res.status(200).json(data);
};

const deleteUserController = async (req, res) => {
  const data = await userServices.deleteUserService(req.params.id);
  if (!data) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

const deleteManyUsersController = async (req, res) => {
  const data = await userServices.deleteManyUsersService(req.body);

  return res.status(200).json(data);
};

export default {
  getAllUsersController,
  getUserByIdController,
  createUserController,
  createManyUsersController,
  updateUserController,
  updateManyUsersController,
  updateUsersTransactionController,
  deleteUserController,
  deleteManyUsersController,
};
