import { Comentario } from 'src/entity/comentario.entity';

export type UsuarioType = {
  readonly idusuario?: number;
  readonly nombre_usuario: string;
  readonly apellido_usuario: string;
  readonly correo_usuario: string;
  readonly password_usuario: string;
  readonly fecha_creacion?: string;
  readonly fecha_actualizacion?: string;
  readonly fecha_eliminacion?: string;
  readonly comentario?: Comentario;
};
