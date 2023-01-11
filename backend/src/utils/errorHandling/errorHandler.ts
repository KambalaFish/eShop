import type { Response } from 'express';
import type { StatusCodes } from '@utils/statusCodes';
import { generateErrorResponse } from '@utils/errorHandling/generateErrorResponse';
import { logger } from '@utils/logger';

const errorHandler = (error: unknown, statusCode: StatusCodes, res: Response) => {
  logger.error(error);
  return res.status(statusCode).json(generateErrorResponse(error));
};

export { errorHandler };
