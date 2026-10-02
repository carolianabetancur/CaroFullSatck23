import { Router } from 'express';
import userController from '../../controllers/userController.js';

const router = new Router();

router
  .post('/login', userController.loginController)
  .post('/', userController.postUserController);

export default router;
