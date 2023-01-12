import type { ObjectSchema } from 'joi';
import type { NextFunction, Request, Response } from 'express';
import { errorHandler } from '@utils/errorHandling/errorHandler';
import { StatusCodes } from '@utils/statusCodes';

export interface RequestSchema {
  body?: ObjectSchema;
  params?: ObjectSchema;
  query?: ObjectSchema;
}
const validateResources =
  (schema: ObjectSchema<RequestSchema>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate({
      body: req.body,
      params: req.params,
      query: req.query,
    });
    if (error) {
      return errorHandler(error, StatusCodes.BAD_REQUEST, res);
    }
    return next();
  };
export { validateResources };
