import { Router } from 'express';
import authorController from '../../controllers/authorController.js';

const router = new Router();

router
  .get('/', authorController.getAuthorsController)
  .post('/', authorController.postAuthorsController)
  .put('/:id', authorController.putAuthorsController)
  .delete('/:id', authorController.deleteAuthorsController);

export default router;
