import type { RequestSchema } from '@interfaces/RequestSchema';
import Joi from 'joi';

const createRequestSchema = (schema: RequestSchema) => {
  return Joi.object<RequestSchema>(schema).unknown(true);
};

export { createRequestSchema };
