/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ComentarioService } from '../Services/comentario.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

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
    async getComentarios(@Param('id') id: ParseIntPipe): Promise<any> { return await this.comentarioService.getComentarios(id); };

    @Get('/:id/usuarios')
    async getComentariesUser(@Param('id') id: ParseIntPipe): Promise<any> { return await this.comentarioService.getComentariesUser(id) };

    @Get('/:id/usuario/:usuarioId')
    async getComentariesUserById(@Param('id') id: ParseIntPipe, @Param('usuarioId') usuarioId: number): Promise<any> { return await this.comentarioService.getComentariesUserById(id, usuarioId); }

}
