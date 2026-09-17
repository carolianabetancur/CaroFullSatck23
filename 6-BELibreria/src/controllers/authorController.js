import authorService from '../services/authorService.js';

const getAuthorsController = async (req, res) => {
  const datos = await authorService.getAuthorsService();
  res.json(datos);
};
const postAuthorsController = async (req, res) => {
  const datos = await authorService.postAuthorsService(req.body);
  res.json(datos);
};
const putAuthorsController = async (req, res) => {
  const datos = await authorService.putAuthorsService(req.body, req.params.id);
  res.json(datos);
};
const deleteAuthorsController = async (req, res) => {
  const datos = await authorService.deleteAuthorsService(req.params.id);
  res.json(datos);
};

export default {
  getAuthorsController,
  postAuthorsController,
  putAuthorsController,
  deleteAuthorsController,
};
