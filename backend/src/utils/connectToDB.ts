import mongoose from 'mongoose';
import config from 'config';
import { logger } from './logger';

const connectToDB = async () => {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri, {
      retryWrites: true,
      retryReads: true,
    });
    logger.info(`Connected successfully to ${dbUri} database`);
  } catch (error) {
    logger.error(`Couldn't establish connection to ${dbUri} database: `);
    logger.error(error);
    throw error;
  }
};

export { connectToDB };
