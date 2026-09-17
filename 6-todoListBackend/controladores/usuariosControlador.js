//Podemos definir una función con arrow fuction, pero estas aunque se posicionen antes, tienen un hosting menos importantes que las
//function, además cuando llamo una function antes de definirla, no produce error, por qué siempre se lee primero la definición de function
//Pero con arrow functios si la llamo antes de definirla, me lanza un error, por eso es mejor usar function
import usuariosServicio from '../servicios/usuariosServicio.js';

const getUserController = async (req, res) => {
  const data = await usuariosServicio.getUserService();
  res.status(200).json(data);
};
const postUserController = async (req, res) => {
  const data = await usuariosServicio.postUserService(req.body);
  res.status(201).json(data);
};

const updateUserController = async (req, res) => {
  const data = await usuariosServicio.updateUserService(
    req.body,
    req.params.id,
  );
  res.status(200).json(data);
};
const deleteUserController = async (req, res) => {
  const data = await usuariosServicio.deleteUserService(req.params.id);
  res.status(200).json(data);
};

export default {
  getUserController,
  postUserController,
  updateUserController,
  deleteUserController,
};
