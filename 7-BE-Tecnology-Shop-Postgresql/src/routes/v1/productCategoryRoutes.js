import { Router } from 'express';
import productCategoryController from '../../controllers/productCategoryController.js';

const route = new Router();

route
  .get('/', productCategoryController.getAllProductsCategoryController)
  .get(
    '/:idProduct/:idCategory',
    productCategoryController.getProductCategoryByIdController,
  )
  .post('/', productCategoryController.createProductCategoryController)
  .post('/bulk', productCategoryController.createManyProductCategoryController)
  .put('/', productCategoryController.updateProductCategoryController)
  .delete(
    '/:idProduct/:idCategory',
    productCategoryController.deleteProductCategoryController,
  );

export default route;
