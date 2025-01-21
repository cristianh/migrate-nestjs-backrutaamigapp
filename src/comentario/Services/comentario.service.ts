/* eslint-disable prettier/prettier */
import { Injectable, ParseIntPipe } from '@nestjs/common';
import { UsuarioDto } from 'src/usuario/Dto/usuario.dto';
import { UsuarioService } from 'src/usuario/Services/usuario.service';

@Injectable()
export class ComentarioService {


    constructor(private usuarioService: UsuarioService) {

    }

    getAllComentarios() {
        return {
            message: 'Get all comentarios',
            usuario:UsuarioDto
        }
    }

    getComentarios(id: ParseIntPipe) {
        return {
            id
        }
    }
    getComentariesUser(id: ParseIntPipe): any {
        return {
            id,
            usuario:this.usuarioService.getAllUsers()
        }
    }

    getComentariesUserById(id: ParseIntPipe, usuarioId: number): any {
        return {
            id,
            usuarioId:this.usuarioService.getUserById(usuarioId)
        }
    }
}
