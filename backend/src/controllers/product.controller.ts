import { productService } from '@services/product.service';
import { ControllerBase } from '@controllers/ControllerBase';
const productController = new ControllerBase(productService, 'product');

export { productController };
