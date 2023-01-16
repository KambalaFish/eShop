import { createRequestSchema } from '@utils/createRequestSchema';
import Joi from 'joi';
import { ExtendedJoi } from '@schemas/extendedJoi';
const productCreationSchema = createRequestSchema({
  body: Joi.object({
    name: Joi.string().min(2).required(),
    description: Joi.string().min(10).required(),
    price: Joi.number().positive().required(),
    category: ExtendedJoi.objectId().required(),
    imageUrl: Joi.string().uri().required(),
  }).required(),
});
const productIdParams = {
  params: Joi.object({
    productId: ExtendedJoi.objectId(),
  }),
};
const partialBody = {
  body: Joi.object({
    name: Joi.string().min(2),
    description: Joi.string().min(10),
    price: Joi.number().positive(),
    category: ExtendedJoi.objectId(),
    imageUrl: Joi.string().uri(),
  })
    .min(1)
    .required(),
};

const getProductByIdSchema = createRequestSchema({
  ...productIdParams,
});

const deleteProductById = createRequestSchema({
  ...productIdParams,
});

const productUpdateSchema = createRequestSchema({
  ...partialBody,
  ...productIdParams,
});

export {
  productCreationSchema,
  productUpdateSchema,
  getProductByIdSchema,
  deleteProductById,
};
