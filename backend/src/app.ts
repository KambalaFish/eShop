process.env['NODE_CONFIG_DIR'] = __dirname + '/config';
import dotenv from 'dotenv';
dotenv.config();
import config from 'config';
import express from 'express';
import { logger } from './utils/logger';

const port = config.get<number>('port');

const app = express();

app.listen(port, () => logger.info(`server is running on port ${port}`));
