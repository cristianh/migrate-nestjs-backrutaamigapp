import * as Joi from 'joi';

import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from 'src/config';
import { enviroments } from 'src/enviroments';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
      }),
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? process.env.API_KEY : 'Desa',
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
