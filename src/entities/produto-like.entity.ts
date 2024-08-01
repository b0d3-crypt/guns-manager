import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Produto } from './produto.entity';

@Entity('produto_like')  
export class ProdutoLike {
    @PrimaryColumn()
    produto_id: number;

    @Column({ name: 'nr_like' }) 
    nrLike: number;

    @OneToOne(() => Produto, { eager: true })
    @JoinColumn({ name: 'produto_id' })
    produto: Produto;

    constructor(produto_id?: number, nrLike?: number, produto?: Produto) {
        this.produto_id = produto_id;
        this.nrLike = nrLike;
        this.produto = produto;
    }
}
