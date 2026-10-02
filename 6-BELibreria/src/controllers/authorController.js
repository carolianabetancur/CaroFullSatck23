import authorService from '../services/authorService.js';

const getAuthorsController = async (req, res) => {
  const data = await authorService.getAuthorsService();
  res.json(data);
};
const postAuthorsController = async (req, res) => {
  const data = await authorService.postAuthorsService(req.body);
  res.json(data);
};
const putAuthorsController = async (req, res) => {
  const data = await authorService.putAuthorsService(req.body, req.params.id);
  res.json(data);
};
const deleteAuthorsController = async (req, res) => {
  const data = await authorService.deleteAuthorsService(req.params.id);
  res.json(data);
};

export default {
  getAuthorsController,
  postAuthorsController,
  putAuthorsController,
  deleteAuthorsController,
};
