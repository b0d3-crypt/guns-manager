import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pessoa')
export class Pessoa {

    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'nome' })
    nome: string;

    @Column({ name: 'email' })
    email: string;

    constructor(id?: number, nome?: string, email?: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
