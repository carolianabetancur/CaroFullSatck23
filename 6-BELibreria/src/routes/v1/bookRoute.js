// Permite manejar las rutas de forma aislada
import { Router } from 'express';
import bookController from '../../controllers/bookController.js';

const router = new Router();

router
  .get('/', bookController.getBooksController)
  .post('/', bookController.postBooksController)
  .put('/:id', bookController.putBooksController)
  .delete('/:id', bookController.deleteBooksController);

export default router;
