import { Usuario } from 'src/entity/usuario.entity';

export type ComentarioType = {
  idComentarios: number;
  fecha: string; // ISO date string format (YYYY-MM-DD)
  hora: string; // Time string format (HH:MM:SS)
  comentario: string;
  usuario: Usuario;
};
