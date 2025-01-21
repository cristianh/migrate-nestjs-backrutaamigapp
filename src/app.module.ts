import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ComentarioModule } from './comentario/comentario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entity/usuario.entity';
import { RutaUsuario } from './entity/rutausuario.entity';
import { Comentario } from './entity/comentario.entity';
import { Foro } from './entity/foro.entity';
import { Marcador } from './entity/marcadores.entity';
import { Ruta } from './entity/ruta.entity';
import { Notificacion as Noti } from './entity/notificacion.entity';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Cambia a tu base de datos
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'toor',
      database: 'rutamigapp',
      entities: [Usuario, Comentario, Ruta, RutaUsuario, Foro, Marcador, Noti],
      synchronize: true, // Cambiar a false en producción
    }),
    TypeOrmModule.forFeature([Usuario]),
    UsuarioModule,
    ComentarioModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
