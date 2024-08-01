import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoImagem } from "src/dtos/produto-imagem.dto";
import { ProdutoReponse } from "src/dtos/produto-response.dto";
import { Produto } from "src/entities/produto.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private readonly _produtoRepository: Repository<Produto>
    ){} 
    
    async save(produto: Produto): Promise<Produto> {
        return this._produtoRepository.save(produto);
    }

    async findProdutoAndImagem(): Promise<ProdutoImagem[]> {
        return await this._produtoRepository.createQueryBuilder('produto')
                                    .leftJoinAndSelect('produto.imagem', 'imagem')
                                    .select([
                                        'produto.id AS idProduto',
                                        'produto.nome AS nome',
                                        'produto.descricao AS descricao',
                                        'imagem.imagem AS imagem',
                                    ])
                                    .getRawMany();
    }

    async findProdutoAndComentario(produtoId: number): Promise<ProdutoReponse[]> {
        return await this._produtoRepository.createQueryBuilder('produto')
                                        .leftJoinAndSelect('produto.imagem', 'imagem')
                                        .leftJoin('comentario_produto', 'A', 'produto.id = A.produto_id')
                                        .leftJoin('comentario', 'B', 'A.comentario_id = B.id')
                                        .leftJoin('usuario', 'C', 'B.usuario_id = C.id')
                                        .leftJoin('pessoa', 'D', 'C.pessoa_id = D.id')
                                        .leftJoin('produto_like', 'E', 'produto.id = E.produto_id')
                                        .select([
                                            'produto.id AS idProduto',
                                            'produto.nome AS nmProduto',
                                            'produto.descricao AS descricao',
                                            'imagem.imagem AS imagem',
                                            'B.comentario AS comentario',
                                            'C.nick AS nick',
                                            'D.email AS email',
                                            'E.nr_like AS nrLike'
                                        ])
                                        .where('produto.id = :produtoId', { produtoId })
                                        .getRawMany();
    }
}