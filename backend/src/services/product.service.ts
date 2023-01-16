import { BaseCRUDService } from '@services/ServiceBase';
import { ProductModel, IProduct } from '@models/product.model';
const productService = new BaseCRUDService<IProduct>(ProductModel);
export { productService };
