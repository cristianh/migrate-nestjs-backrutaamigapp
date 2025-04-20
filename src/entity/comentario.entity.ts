import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Usuario } from '../entity/usuario.entity';

/*idComentarios INT PRIMARY KEY auto_increment,
fecha DATE not null,
hora TIME not null,
comentario VARCHAR (45) not null,
usuario_idusuario int*/

@Entity()
export class Comentario {
  @PrimaryGeneratedColumn()
  idComentarios: number;

  @Column({ type: 'date', nullable: false })
  fecha: string;

  @Column({ type: 'time', nullable: false })
  hora: string;

  @Column({ type: 'varchar', nullable: false })
  comentario: string;

  /* @OneToMany(() => Foro, (foro) => foro.comentario)
    foro:Foro */

  @ManyToOne(() => Usuario, (usuario) => usuario.comentario)
  usuario: Usuario;
}
