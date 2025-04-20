import { Module } from '@nestjs/common';
import { RutaController } from './controllers/ruta.controller';
//import { RutaService } from './services/ruta.service';
// eslint-disable-next-line prettier/prettier

@Module({
  imports: [], // other modules
  controllers: [RutaController], // e.g. UsersController
  providers: [], // e.g. UsersService
  exports: [],
})
export class RutaModule {}
