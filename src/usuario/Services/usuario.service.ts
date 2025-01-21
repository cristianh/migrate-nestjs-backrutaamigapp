/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from 'src/entity/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioDto } from '../Dto/usuario.dto';

@Injectable()
export class UsuarioService {

    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>

    constructor(){
        
    }
   

    getAllUsers(): Promise<Usuario[]> {
       return this.userRepository.find();
    }

    getAllUsersPaginate(limit: number, skip: number, all: boolean): any {
        return {
            limit,
            skip,
            all
        }
    }

     async getUserById(id: number): Promise<Usuario> {

        const usuario:Usuario = await this.userRepository.findOneBy({idusuario:id});
        if(!usuario){
            throw new NotFoundException("Usuario no encontrado");
        }
        return usuario
    }


    createUser(usuario: Partial<UsuarioDto>): Promise<UsuarioDto> {
        return this.userRepository.save(usuario);
    }

    async updateUser(id: number, usuario: Partial<UsuarioDto>): Promise<any> {
        const usuarioFind:Usuario = await this.userRepository.findOneBy({idusuario:id});

        if(!usuarioFind){
            throw new NotFoundException("Usuario no encontrado");
        }

        this.userRepository.merge(usuarioFind, usuario)
        return this.userRepository.save(usuarioFind);
    }

    async deleteUser(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
