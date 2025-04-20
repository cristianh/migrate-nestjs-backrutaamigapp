import { Comentario } from './../entity/comentario.entity';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsuarioController } from './Controllers/usuarioController';
import { UsuarioService } from './Services/usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/entity/usuario.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario,Comentario])],
    controllers: [UsuarioController],
    providers: [
        UsuarioService,
    ],
    exports: [UsuarioService]
})
export class UsuarioModule {
}
