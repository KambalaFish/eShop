import type { Request, Response, NextFunction } from 'express';
import { logger } from '@utils/logger';

const logRequestMiddleware = (req: Request, res: Response, next: NextFunction) => {
  logger.info(
    `Incoming -> method: [${req.method}] - url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );
  res.on('finish', () => {
    logger.info(
      `Outgoing -> method: [${req.method}] - url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
    );
  });
  next();
};
export { logRequestMiddleware };
