import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Comentario } from "./comentario.entity";
import { Produto } from "./produto.entity";

@Entity('comentario_produto')
export class ComentarioProduto {

    @PrimaryColumn({ name: 'produto_id' })
    produtoId: number;

    @PrimaryColumn({ name: 'comentario_id' })
    comentarioId: number;

    @ManyToOne(() => Produto)
    @JoinColumn({ name: 'produto_id' })
    produto: Produto;

    @ManyToOne(() => Comentario)
    @JoinColumn({ name: 'comentario_id' })
    comentario: Comentario;
}