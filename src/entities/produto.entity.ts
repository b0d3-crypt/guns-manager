import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Imagem } from "./imagem.entity";

@Entity('produto')
export class Produto {

    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @Column({name: 'nome'})
    nome: string;

    @Column({name: 'descricao'})
    descricao: string;

    @OneToOne(() => Imagem)
    @JoinColumn({name: 'imagem_id'})
    imagem: Imagem;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}