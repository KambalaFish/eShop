import type { Express, Request, Response } from 'express';
import { StatusCodes } from '@utils/statusCodes';
import { categoryRouter } from '@routes/category.routes';
const routes = (app: Express) => {
  app.get('/ping', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).json({ message: 'pong' });
  });

  app.use('/category', categoryRouter);
};

export { routes };
