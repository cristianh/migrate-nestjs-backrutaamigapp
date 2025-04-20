/* eslint-disable prettier/prettier */
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber} from 'class-validator';
import { Comentario } from 'src/entity/comentario.entity';
import { Usuario } from 'src/entity/usuario.entity';
import { ComentarioType } from 'src/types/ComentarioType';



export class ComentarioDto extends PartialType(Comentario) implements ComentarioType{
    @IsNumber()
    @ApiProperty({description:"Id del comentario"})
    readonly idComentarios: number;

    @IsNotEmpty({message: `El campo fecha del comentario no debe estar vacio.`})
    @IsString({message:"El campo fecha del comentario debe ser string"})
    @ApiProperty({description:"Fecha del comentario"})
    readonly fecha: string;

    @IsNotEmpty({message: `El campo hora del comentario no debe estar vacio.`})
    @IsString({message:"El campo hora del comentario debe ser string"})
    @ApiProperty({description:"Hora del comentario"})
    readonly hora: string;

    @IsNotEmpty({message: `El campo comentario no debe estar vacio.`})
    @IsString({message:"El campo comentario debe ser string"})
    @ApiProperty({description:"Comentario"})
    readonly comentario: string;

    @ApiProperty({description:"Usuario"})
    readonly usuario: Usuario;
}

