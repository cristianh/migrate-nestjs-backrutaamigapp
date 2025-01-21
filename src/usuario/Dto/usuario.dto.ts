/* eslint-disable prettier/prettier */
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Usuario } from "src/entity/usuario.entity";
import { UsuarioType } from 'src/types/UsuarioType';




export class UsuarioDto  extends PartialType(Usuario) implements UsuarioType{

    @IsNotEmpty({message: `El campo nombre del usuario no debe estar vacio.`})
    @IsString({message:"El campo nombre del usuario debe ser string"})
    @ApiProperty({description:"Nombre del usuario"})
    readonly nombre_usuario: string;

    @IsNotEmpty({message: `El campo apellido del usuario no debe estar vacio.`})
    @IsString({message:"El campo apellido del usuario debe ser string"})
    readonly apellido_usuario: string;

    @IsNotEmpty({message: `El campo correo del usuario no debe estar vacio.`})
    @IsEmail()
    readonly correo_usuario: string;

    @IsNotEmpty({message: `El campo password del usuario no debe estar vacio.`})
    @IsString({message:"El campo password del usuario debe ser string"})
    readonly password_usuario: string;
}


