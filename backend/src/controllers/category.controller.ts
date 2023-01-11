import type { Request, Response } from 'express';
import type { ICategory } from '@models/category.model';
import {
  createCategory,
  deleteCategory,
  findCategories,
  updateCategory,
} from '@services/category.service';
import { StatusCodes } from '@utils/statusCodes';
import { logger } from '@utils/logger';
import { generateErrorResponse } from '@utils/errorHandling/generateErrorResponse';
import { errorHandler } from '@utils/errorHandling/errorHandler';
import { NotFoundError } from '@utils/errorHandling/customErrors';

const createCategoryHandler = async (
  req: Request<object, object, ICategory>,
  res: Response
) => {
  try {
    const createdCategory = await createCategory(req.body);
    return res.status(StatusCodes.CREATED).json({ category: createdCategory });
  } catch (error) {
    logger.error(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(generateErrorResponse(error));
  }
};

const getAllCategoriesHandler = async (req: Request, res: Response) => {
  try {
    const categories = await findCategories();
    return res.status(StatusCodes.OK).json({ categories });
  } catch (error) {
    logger.error(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(generateErrorResponse(error));
  }
};

type CategoryParameter = { categoryId: string };
const updateCategoryHandler = async (
  req: Request<CategoryParameter, object, Partial<ICategory>>,
  res: Response
) => {
  const { categoryId } = req.params;
  try {
    const updatedCategory = await updateCategory({ _id: categoryId }, req.body);
    if (!updatedCategory) {
      return errorHandler(
        new NotFoundError(
          `Can't update category with the specified id. The category was not found`
        ),
        StatusCodes.NOT_FOUND,
        res
      );
    }
    return res.status(StatusCodes.OK).json({ updatedCategory });
  } catch (error) {
    return errorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, res);
  }
};

const deleteCategoryHandler = async (
  req: Request<CategoryParameter>,
  res: Response
) => {
  const { categoryId } = req.params;
  try {
    const deletedCategory = await deleteCategory({ name: categoryId });
    if (!deletedCategory) {
      return errorHandler(
        new NotFoundError(
          `Can't delete category with the specified id. The category was not found`
        ),
        StatusCodes.NOT_FOUND,
        res
      );
    }
    return res.status(StatusCodes.OK).json({
      message: `Category with ${categoryId} id was deleted successfully`,
    });
  } catch (error) {
    return errorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, res);
  }
};

export {
  createCategoryHandler,
  getAllCategoriesHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
};
