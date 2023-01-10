import type { Request, Response } from 'express';
import { logger } from '@utils/logger';
import { NOT_FOUND } from '@utils/statusCodes';

/**
 * if request passes through all the routes and doesn't match anything,
 * we are going to report about an error */
const unmatchedAnyRouteMiddleware = (req: Request, res: Response) => {
  const error = new Error(`Request didn't match any route!`);
  logger.error(error.message);
  return res.status(NOT_FOUND).json({ message: error.message });
};

export { unmatchedAnyRouteMiddleware };
