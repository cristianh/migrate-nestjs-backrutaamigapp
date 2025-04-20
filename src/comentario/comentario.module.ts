import { Module } from '@nestjs/common';
import { ComentarioController } from './Controllers/comentario.controller';
import { ComentarioService } from './Services/comentario.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from 'src/entity/comentario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario]), UsuarioModule],
  controllers: [ComentarioController],
  providers: [ComentarioService],
  exports: [ComentarioService],
})
export class ComentarioModule {}
