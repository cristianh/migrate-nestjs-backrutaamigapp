/* eslint-disable prettier/prettier */
import { UsuarioDto } from 'src/usuario/Dto/usuario.dto';


export class ComentarioDto {
    id: number;
    comentario: string;
    data: Date;
    usuario: UsuarioDto;
}

