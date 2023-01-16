import { Router } from 'express';
import { productController } from '@controllers/product.controller';
import { validateResources } from '@middlewares/routeMiddlewares/validateResources';
import {
  deleteProductById,
  getProductByIdSchema,
  productCreationSchema,
  productUpdateSchema,
} from '@schemas/product.schema';

const productRouter = Router();

productRouter
  .route('/')
  .get(productController.get)
  .post(validateResources(productCreationSchema), productController.create);

const idParameterName = 'productId';

productRouter
  .route(`/:${idParameterName}`)
  .get(
    validateResources(getProductByIdSchema),
    productController.getByIdWrapper(idParameterName)
  )
  .put(
    validateResources(productUpdateSchema),
    productController.updateByIdWrapper(idParameterName)
  )
  .delete(
    validateResources(deleteProductById),
    productController.deleteByIdWrapper(idParameterName)
  );

export { productRouter };
