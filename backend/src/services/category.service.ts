import { BaseCRUDService } from '@services/ServiceBase';
import { CategoryModel, ICategory } from '@models/category.model';

const categoryService = new BaseCRUDService<ICategory>(CategoryModel);
export { categoryService };
