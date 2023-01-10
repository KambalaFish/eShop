import type { Express } from 'express';
import { unmatchedAnyRouteMiddleware } from './unmatchedAnyRouteMiddleware';

const afterRoutesMiddleware = (app: Express) => {
  app.use(unmatchedAnyRouteMiddleware);
};

export { afterRoutesMiddleware };
