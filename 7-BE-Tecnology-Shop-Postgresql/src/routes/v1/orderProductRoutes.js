import { Router } from 'express';
import orderProductControllers from '../../controllers/orderProductControllers.js';

const route = new Router();

route
  .get('/', orderProductControllers.getAllOrderProductsController)
  .get(
    '/:idOrder/:idProduct',
    orderProductControllers.getOrderProductByIdController,
  )
  .post('/', orderProductControllers.createOrderProductController)
  .post('/bulk', orderProductControllers.createManyOrderProductController)
  .put('/', orderProductControllers.updateOrderProductController)
  .delete(
    '/:idOrder/:idProduct',
    orderProductControllers.deleteOrderProductController,
  );

export default route;
