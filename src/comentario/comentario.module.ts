import { Module } from '@nestjs/common';
import { ComentarioController } from './Controllers/comentario.controller';
import { ComentarioService } from './Services/comentario.service';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [ComentarioController],
  providers: [ComentarioService],
})
export class ComentarioModule {}
