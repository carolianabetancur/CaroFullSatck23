import userService from '../services/userService.js';

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.loginService(email, password);
  return res.json(user);
};
const postUserController = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.postUserService(email, password);
  return res.json(user);
};
export default {
  loginController,
  postUserController,
};
