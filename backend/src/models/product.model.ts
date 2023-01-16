import mongoose, { Schema } from 'mongoose';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: mongoose.Schema.Types.ObjectId;
  imageUrl: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, required: true },
    imageUrl: { type: String, required: true },
  },
  {
    strictQuery: true,
  }
);

const ProductModel = mongoose.model<IProduct>('Product', productSchema);

export { ProductModel };
