import type { RequestSchema } from '@middlewares/routeMiddlewares/validateResources';
import Joi from 'joi';

const createRequestSchema = (schema: RequestSchema) => {
  return Joi.object<RequestSchema>(schema).unknown(true);
};

export { createRequestSchema };
