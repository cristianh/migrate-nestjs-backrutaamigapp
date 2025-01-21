/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Comentario } from '../entity/comentario.entity';


@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    idusuario: number

    @Column({type: String,length: 45,nullable:false})
    nombre_usuario: string

    @Column({type: String,length: 45,nullable:false})
    apellido_usuario: string

    @Column({type: String,length: 45,nullable:false})
    correo_usuario: string

    @Column({type: "varchar",length: 60,nullable:false})
    password_usuario: string

    @Column({type: "boolean",nullable:false,default: true})
    estado_usuario: string

    /* @OneToMany(() => Foro, (foro) => foro.comentario)
    foro:Foro */

    @OneToMany(() => Comentario, (comentario) => comentario.usuario)
    comentario:Comentario

    @CreateDateColumn()
    fecha_creacion : string

    @UpdateDateColumn()
    fecha_actualizacion : string

    @DeleteDateColumn()
    fecha_eliminacion : string
}