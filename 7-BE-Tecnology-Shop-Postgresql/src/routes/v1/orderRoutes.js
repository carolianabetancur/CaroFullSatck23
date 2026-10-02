import { Router } from 'express';
import orderControllers from '../../controllers/orderControllers.js';

const route = new Router();

route
  .get('/', orderControllers.getAllOrdersController)
  .get('/:id', orderControllers.getOrderByIdController)
  .post('/', orderControllers.createOrderController)
  .post('/bulk', orderControllers.createManyOrderController)
  .put('/:id', orderControllers.updateOrderController)
  .delete('/:id', orderControllers.deleteOrderController);

export default route;
