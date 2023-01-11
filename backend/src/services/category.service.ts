import type { ICategory } from '@models/category.model';
import { CategoryModel } from '@models/category.model';
import type { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

const createCategory = async (input: ICategory) => {
  const category = await CategoryModel.create(input);
  return category.toJSON();
};

const findCategories = async (query: FilterQuery<ICategory> = {}) => {
  return CategoryModel.find(query).lean();
};

const updateCategory = async (
  query: FilterQuery<ICategory>,
  update: UpdateQuery<ICategory>,
  options: QueryOptions = {
    new: true,
    lean: true,
  }
) => {
  return CategoryModel.findOneAndUpdate(query, update, options);
};

const deleteCategory = async (
  query: FilterQuery<ICategory>,
  options: QueryOptions = {}
) => {
  return CategoryModel.findOneAndDelete(query, options);
};

export { createCategory, findCategories, updateCategory, deleteCategory };
