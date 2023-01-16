import { categoryService } from '@services/category.service';
import { ControllerBase } from '@controllers/ControllerBase';

const categoryController = new ControllerBase(categoryService, 'category');
export { categoryController };
