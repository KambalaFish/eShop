import type { Express } from 'express';
import { json, urlencoded } from 'express';
import { logRequestMiddleware } from './requestLoggerMiddleware';
const beforeRoutesMiddleware = (app: Express) => {
  app.use(json());
  app.use(urlencoded());
  app.use(logRequestMiddleware);
};

export { beforeRoutesMiddleware };
