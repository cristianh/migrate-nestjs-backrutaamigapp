import { PartialType } from '@nestjs/swagger';
import { Ruta } from 'src/entity/ruta.entity';
import { Usuario } from 'src/entity/usuario.entity';
import { RutaType } from 'src/types/RutaType';

export class RutaDto extends PartialType(Ruta) implements RutaType {
  idRutas: number;
  nombre: string;
  descripcion: string;
  sentido: string;
  usuario: Usuario;
}
