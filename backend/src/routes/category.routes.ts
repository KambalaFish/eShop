import { Router } from 'express';
import {
  createCategoryHandler,
  deleteCategoryHandler,
  getAllCategoriesHandler,
  updateCategoryHandler,
} from '@controllers/category.controller';
import { validateResources } from '@middlewares/routeMiddlewares/validateResources';
import {
  categoryCreationSchema,
  categoryDeleteSchema,
  categoryUpdateSchema,
} from '@schemas/category.schema';

const categoryRouter = Router();

categoryRouter
  .route('/')
  .get(getAllCategoriesHandler)
  .post(validateResources(categoryCreationSchema), createCategoryHandler);

categoryRouter
  .route('/:categoryId')
  .put(validateResources(categoryUpdateSchema), updateCategoryHandler)
  .delete(validateResources(categoryDeleteSchema), deleteCategoryHandler);

export { categoryRouter };
