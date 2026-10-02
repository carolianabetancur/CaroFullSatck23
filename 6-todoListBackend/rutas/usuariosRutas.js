import Router from 'express';
import validateToken from '../middleware/validateToken.js';
import usuariosControlador from '../controladores/usuariosControlador.js';

const route = Router();

route
  .get('/', validateToken.validateToken, usuariosControlador.getUserController)
  .post('/', usuariosControlador.postUserController)
  .post('/login', usuariosControlador.loginController)
  .put(
    '/:id',
    validateToken.validateToken,
    usuariosControlador.updateUserController,
  )
  .delete(
    '/:id',
    validateToken.validateToken,
    usuariosControlador.deleteUserController,
  );

export default route;
