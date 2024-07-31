import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('imagem')
export class Imagem {

    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @Column({name: 'nome'})
    nome: string;

    @Column({name: 'imagem', type: 'varchar'})
    imagem: string;

    constructor(id: number, nome: string, imagem: string) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
    }
}