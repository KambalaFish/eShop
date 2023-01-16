import Joi from 'joi';
import { createRequestSchema } from '@utils/createRequestSchema';
import { ExtendedJoi } from '@schemas/extendedJoi';

const categoryCreationSchema = createRequestSchema({
  body: Joi.object({
    name: Joi.string().min(2).required(),
  }).required(),
});

const params = {
  params: Joi.object({
    categoryId: ExtendedJoi.objectId(),
  }).required(),
};

const categoryUpdateSchema = createRequestSchema({
  body: Joi.object({
    _id: ExtendedJoi.objectId(),
    name: Joi.string().min(2),
  })
    .min(1)
    .required(),
  ...params,
});

const categoryDeleteSchema = createRequestSchema(params);

export { categoryCreationSchema, categoryUpdateSchema, categoryDeleteSchema };
