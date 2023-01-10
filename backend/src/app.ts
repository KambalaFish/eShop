process.env['NODE_CONFIG_DIR'] = __dirname + '/config';
import dotenv from 'dotenv';
dotenv.config();
import config from 'config';
import express from 'express';
import { logger } from '@utils/logger';
import { connectToDB } from '@utils/connectToDB';
import { routes } from '@routes';

const port = config.get<number>('port');

const app = express();

app.listen(port, async () => {
  logger.info(`Server is running on port ${port}`);
  await connectToDB();
  routes(app);
});
