import * as Joi from 'joi';

import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import config from 'src/config';
import { enviroments } from 'src/enviroments';
//importando modulo typeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
/*import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entity/usuario.entity';
import { RutaUsuario } from './entity/rutausuario.entity';
import { Comentario } from './entity/comentario.entity';
import { Foro } from './entity/foro.entity';
import { Marcador } from './entity/marcadores.entity';
import { Ruta } from './entity/ruta.entity';
import { Notificacion as Noti } from './entity/notificacion.entity';*/
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (ConfigService: ConfigType<typeof config>) => {
        const { type, host, port, username, password, database } =
          ConfigService.database;

        return {
          type: type as any, // Cast to any to bypass type incompatibility
          host,
          port: parseInt(process.env.DATABASE_PORT || port.toString(), 10),
          username,
          password,
          database,
          synchronize: true,
          autoLoadEntities: true,
        };
      },
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
