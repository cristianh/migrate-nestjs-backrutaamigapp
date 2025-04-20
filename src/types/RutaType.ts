import { Usuario } from 'src/entity/usuario.entity';
export type RutaType = {
  idRutas: number;
  nombre: string;
  descripcion: string;
  sentido: string;
  usuario: Usuario;
};
