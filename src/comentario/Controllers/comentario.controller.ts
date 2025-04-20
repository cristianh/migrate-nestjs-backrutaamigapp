/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ComentarioService } from '../Services/comentario.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ComentarioDto } from '../Dto/ComentarioDto';
import { Usuario } from 'src/entity/usuario.entity';

@ApiTags('Comentarios')
@Controller('comentarios')
export class ComentarioController {

    constructor(private comentarioService: ComentarioService) {

    }

    @Get('/')
    @ApiOperation({summary:"Lista todos los comentarios"})
    async getAllComentarios( ): Promise<any> { return await this.comentarioService.getAllComentarios(); };

    @Get('/:id')
    @ApiOperation({summary:"Lista el comentario por Id"})
    async getComentarios(@Param('id', ParseIntPipe) id: number): Promise<any> { return await this.comentarioService.getComentarios(id); };

    @Post('/savecomentario')
    @ApiOperation({summary:"Crea un comentario"})
    async createComentario(@Body()comentario:ComentarioDto): Promise<any> { return await this.comentarioService.createComentario(comentario); };

    @Get('/:id/usuarios')
    async getComentariesUser(@Param('id',ParseIntPipe) id:number ): Promise<any> { return await this.comentarioService.getComentariesUser(id) };

    @Get('/:id/usuario/:usuarioId')
    async getComentariesUserById(@Param('id',ParseIntPipe) id:number , @Param('usuarioId',ParseIntPipe) usuario: Usuario): Promise<any> { return await this.comentarioService.getComentariesUserById(id,usuario); }

}
