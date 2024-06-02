import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./pessoa.entity";

@Entity('usuario')
export class Usuario {

    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @OneToOne(() => Pessoa)
    @JoinColumn({ name: 'pessoa_id' })
    pessoa: Pessoa;

    @Column({ name: 'nick'})
    nick: string;

    @Column({ name: 'password' })
    password: string;

    constructor(id?: number, pessoa?: Pessoa, nick?: string, password?: string) {
        this.id = id;
        this.pessoa = pessoa;
        this.nick = nick;
        this.password = password;
    }
}
