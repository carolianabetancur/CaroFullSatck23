import { Router } from 'express';
import userControllers from '../../controllers/userControllers.js';

// En Express, el orden de las rutas importa. Como tienes /:id, conviene poner /many antes de /:id, para que "many" no sea interpretado como un id.
const route = new Router();

route
  .get('/', userControllers.getAllUsersController)
  .get('/:id', userControllers.getUserByIdController)
  .post('/', userControllers.createUserController)
  .post('/bulk', userControllers.createManyUsersController)
  .put('/bulk', userControllers.updateManyUsersController)
  .put('/bulk', userControllers.updateUsersTransactionController)
  .put('/:id', userControllers.updateUserController)
  .delete('/bulk', userControllers.deleteManyUsersController)
  .delete('/:id', userControllers.deleteUserController);

export default route;
