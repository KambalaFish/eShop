import { Router } from 'express';
import { categoryController } from '@controllers/category.controller';
import { validateResources } from '@middlewares/routeMiddlewares/validateResources';
import {
  categoryCreationSchema,
  categoryDeleteSchema,
  categoryUpdateSchema,
} from '@schemas/category.schema';

const categoryRouter = Router();

categoryRouter
  .route('/')
  .get(categoryController.get)
  .post(validateResources(categoryCreationSchema), categoryController.create);

const idParameterName = 'categoryId';

categoryRouter
  .route(`/:${idParameterName}`)
  .put(
    validateResources(categoryUpdateSchema),
    categoryController.updateByIdWrapper(idParameterName)
  )
  .delete(
    validateResources(categoryDeleteSchema),
    categoryController.deleteByIdWrapper(idParameterName)
  );

export { categoryRouter };
