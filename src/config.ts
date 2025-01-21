/* eslint-disable @typescript-eslint/no-unused-expressions */
import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_HOST,
      password: process.env.DATABASE_PASSWORD,
      database_name: process.env.DATABASE_NAME,
    },
  };
});
