import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ComentarioModule } from './comentario/comentario.module';
import { DatabaseModule } from './database/database.module';
import { RutaModule } from './ruta/ruta.module';

@Module({
  imports: [UsuarioModule, ComentarioModule, DatabaseModule, RutaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
