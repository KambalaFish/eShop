import type { Express, Request, Response } from 'express';
import { OK } from '@utils/statusCodes';
const routes = (app: Express) => {
  app.get('/ping', (req: Request, res: Response) => {
    res.status(OK).json({ message: 'pong' });
  });
};

export { routes };
