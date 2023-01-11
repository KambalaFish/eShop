import mongoose from 'mongoose';
export interface ICategory {
  name: string;
}

const categorySchema = new mongoose.Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
});

const CategoryModel = mongoose.model<ICategory>('Category', categorySchema);

export { CategoryModel };
