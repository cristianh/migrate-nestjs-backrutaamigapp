/* eslint-disable prettier/prettier */
import { Injectable,NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from 'src/entity/comentario.entity';
import { ComentarioDto } from '../Dto/ComentarioDto';
import { Usuario } from 'src/entity/usuario.entity';
@Injectable()
export class ComentarioService {


    //constructor(private usuarioService: UsuarioService) {}

    constructor(@InjectRepository(Comentario) private readonly comentarioRepository: Repository<Comentario>) {

    }

    getAllComentarios() {
       return this.comentarioRepository.find();
    }

    createComentario(comentario: Partial<ComentarioDto>): Promise<ComentarioDto> {
        this.comentarioRepository.create(comentario);
        return this.comentarioRepository.save(comentario);
    }

    async getComentarios(id: number): Promise<Comentario> {
        const comentario: Comentario = await this.comentarioRepository.findOneBy({idComentarios: id});
        if (!comentario) {
            throw new NotFoundException("Comentario no encontrado");
        }
        return comentario
    }

    getComentariesUser(id: number): any {
        return {
            id
        }
    }

    getComentariesUserById(id: number, usuario: Usuario): any {
        this.comentarioRepository.findOneBy({idComentarios: id, usuario});
    }
}
