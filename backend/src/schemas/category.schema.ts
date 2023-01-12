import Joi from 'joi';
import { createRequestSchema } from '@utils/createRequestSchema';

const categoryCreationSchema = createRequestSchema({
  body: Joi.object({
    name: Joi.string().min(2).required(),
  }).required(),
});

const params = {
  params: Joi.object({
    categoryId: Joi.string().min(1).required(),
  }).required(),
};

const categoryUpdateSchema = createRequestSchema({
  body: Joi.object({
    _id: Joi.string().min(1),
    name: Joi.string().min(2),
  })
    .min(1)
    .required(),
  ...params,
});

const categoryDeleteSchema = createRequestSchema(params);

export { categoryCreationSchema, categoryUpdateSchema, categoryDeleteSchema };
