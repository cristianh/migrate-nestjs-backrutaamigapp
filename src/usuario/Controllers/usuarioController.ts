import { ParseIntPipe } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get,Param, Post, Put, Query } from '@nestjs/common';
import { UsuarioDto } from '../Dto/usuario.dto';
import { UsuarioService } from '../Services/usuario.service';
import { ConfigService } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuarioController {

    constructor(private configService: ConfigService,private readonly usuarioService: UsuarioService) {

    }

    @Get('test')
    getTestEnv(){
        console.log(process.env.NODE_ENV);
        return this.configService.get('API_KEY');
    }

    @Get('/')
    async getAllUsers(){
        return await this.usuarioService.getAllUsers();
    }

    @Get('/user/pagination')
    getAllUsersPagination(@Query('limit') limit = 10, @Query('skip') skip = 0, @Query('all') all = false): any {this.usuarioService.getAllUsersPaginate(limit, skip, all);}

    @Get('/:id')
    async getUserById(@Param('id',ParseIntPipe) id:number): Promise<any> {
        console.log(typeof id) 
        return await this.usuarioService.getUserById(id);
    }

    @Post()
    async createUser(@Body() usuario:UsuarioDto): Promise<any> {
        return  await this.usuarioService.createUser(usuario);
    }

    @Put('/:id')
    async updateUser(@Param('id',ParseIntPipe) id:number,@Body() usuario:UsuarioDto): Promise<any> {
       return await this.usuarioService.updateUser(id, usuario);
    }

    @Delete('/:id')
    async deleteUser(@Param('id',ParseIntPipe) id:number): Promise<any> {
            await this.usuarioService.deleteUser(id);
       return {
        mensaje:`Usuario ${id}, eliminado`
       }
    }
}
