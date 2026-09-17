import Router from 'express';
import usuariosControlador from '../controladores/usuariosControlador.js';

const route = Router();

route
  .get('/', usuariosControlador.getUserController)
  .post('/', usuariosControlador.postUserController)
  .put('/:id', usuariosControlador.updateUserController)
  .delete('/:id', usuariosControlador.deleteUserController);

export default route;
