import { Router } from 'express';
import categoryControllers from '../../controllers/categoryControllers.js';

const route = new Router();

route
  .get('/', categoryControllers.getAllCategoriesController)
  .get('/:id', categoryControllers.getCategoryByIdController)
  .post('/', categoryControllers.createCategoryController)
  .put('/:id', categoryControllers.updateCategoryController)
  .delete('/:id', categoryControllers.deleteCategoryController);

export default route;
