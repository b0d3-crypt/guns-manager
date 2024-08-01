import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity('comentario')
export class Comentario {

    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @Column({name: 'comentario', type: 'text'})
    comentario: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({name: 'usuario_id'})
    usuario: Usuario;

    constructor(id?: number, comentario?: string, usuario?: Usuario) {
        this.id = id;
        this.comentario = comentario;
        this.usuario = usuario;
    }
}