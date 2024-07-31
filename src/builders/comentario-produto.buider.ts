import { ComentarioProduto } from "src/entities/comentario-produto.entity";

export class ComentarioProdutoBuilder {

    private comentarioProduto: ComentarioProduto;

    constructor() {
        this.comentarioProduto = new ComentarioProduto();
    }

    setIdProduto(id: number): ComentarioProdutoBuilder {
        this.comentarioProduto.produtoId = id;
        return this;
    }

    setIdComentario(id: number): ComentarioProdutoBuilder {
        this.comentarioProduto.comentarioId = id;
        return this;
    }

    build(): ComentarioProduto {
        return this.comentarioProduto;
    } 
}