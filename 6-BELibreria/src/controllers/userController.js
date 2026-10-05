import userService from '../services/userService.js';

const getUserController = async (req, res) => {
  const data = await userService.getUserService();
  res.status(200).json(data);
};

const postUserController = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.postUserService(email, password);
  return res.json(user);
};

const updateUserController = async (req, res) => {
  const data = await userService.updateUserService(req.body, req.params.id);
  res.status(200).json(data);
};
const deleteUserController = async (req, res) => {
  const data = await userService.deleteUserService(req.params.id);
  res.status(200).json(data);
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.loginService(email, password);
  return res.json(user);
};

export default {
  getUserController,
  postUserController,
  updateUserController,
  deleteUserController,
  loginController,
};
