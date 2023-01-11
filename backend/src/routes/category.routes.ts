import { Router } from 'express';
import {
  createCategoryHandler,
  deleteCategoryHandler,
  getAllCategoriesHandler,
  updateCategoryHandler,
} from '@controllers/category.controller';

const categoryRouter = Router();

categoryRouter
  .route('/')
  .get(getAllCategoriesHandler)
  .post(createCategoryHandler);

categoryRouter
  .route('/:categoryId')
  .put(updateCategoryHandler)
  .delete(deleteCategoryHandler);

export { categoryRouter };
