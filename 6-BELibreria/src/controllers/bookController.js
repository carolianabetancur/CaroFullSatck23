import bookService from '../services/bookService.js';

const getBooksController = async (req, res) => {
  const datos = await bookService.getBookService();
  res.json(datos);
};
const postBooksController = async (req, res) => {
  const datos = await bookService.postBookService(req.body);
  res.json(datos);
};
const putBooksController = async (req, res) => {
  const datos = await bookService.putBookService(req.body, req.params.id);
  res.json(datos);
};
const deleteBooksController = async (req, res) => {
  const datos = await bookService.deleteBookService(req.params.id);
  res.json(datos);
};

export default {
  getBooksController,
  postBooksController,
  putBooksController,
  deleteBooksController,
};
