import { Router } from 'express';
import validateToken from '../middleware/validateToken.js';
import userController from '../../controllers/userController.js';

const router = new Router();

router
  .get('/', validateToken.validateToken, userController.getUserController)
  .post('/', userController.postUserController)
  .post('/login', userController.loginController)
  .put('/:id', validateToken.validateToken, userController.updateUserController)
  .delete(
    '/:id',
    validateToken.validateToken,
    userController.deleteUserController,
  );

export default router;
