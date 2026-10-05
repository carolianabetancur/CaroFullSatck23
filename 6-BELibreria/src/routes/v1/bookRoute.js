// Permite manejar las rutas de forma aislada
import { Router } from 'express';
import validateToken from '../middleware/validateToken.js';
import bookController from '../../controllers/bookController.js';

const router = new Router();
router.use(validateToken.validateToken);

router
  .get('/', bookController.getBooksController)
  .post('/', bookController.postBooksController)
  .put('/:id', bookController.putBooksController)
  .delete('/:id', bookController.deleteBooksController);

export default router;
