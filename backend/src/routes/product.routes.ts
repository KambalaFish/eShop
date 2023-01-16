import { Router } from 'express';
import { productController } from '@controllers/product.controller';
const productRouter = Router();

productRouter
  .route('/')
  .get(productController.get)
  .post(productController.create);

const idParameterName = 'productId';

productRouter
  .route(`/:${idParameterName}`)
  .get(productController.getByIdWrapper(idParameterName))
  .put(productController.updateByIdWrapper(idParameterName))
  .delete(productController.deleteByIdWrapper(idParameterName));

export { productRouter };
