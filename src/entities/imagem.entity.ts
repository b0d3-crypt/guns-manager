import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('imagem')
export class Imagem {

    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @Column({name: 'nome'})
    nome: string;

    @Column({name: 'imagem', type: 'bytea'})
    imagem: Buffer;

    constructor(id: number, nome: string, imagem: Buffer) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
    }
}