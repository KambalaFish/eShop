import mongoose from 'mongoose';
export interface ICategory {
  name: string;
}

export interface CategoryDocument extends ICategory, mongoose.Document {}

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const CategoryModel = mongoose.model<CategoryDocument>('Category', categorySchema);

export { CategoryModel };
