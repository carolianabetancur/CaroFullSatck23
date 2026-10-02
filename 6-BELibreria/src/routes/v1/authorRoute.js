import { Router } from 'express';
import validateToken from '../middleware/validateToken.js';
import authorController from '../../controllers/authorController.js';

const router = new Router();
router.use(validateToken.validateToken);

router
  .get('/', authorController.getAuthorsController)
  .post('/', authorController.postAuthorsController)
  .put('/:id', authorController.putAuthorsController)
  .delete('/:id', authorController.deleteAuthorsController);

export default router;
