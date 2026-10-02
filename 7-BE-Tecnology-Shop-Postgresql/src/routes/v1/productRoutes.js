import { Router } from 'express';
import productControllers from '../../controllers/productControllers.js';

const route = new Router();

route
  .get('/', productControllers.getAllProductsController)
  .post('/', productControllers.postProductController)
  .put('/:id', productControllers.updateProductController)
  .delete('/:id', productControllers.deleteProductController);

export default route;
