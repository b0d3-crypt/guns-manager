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
                                        .leftJoin('comentario_produto', 'comentario_produto', 'produto.id = comentario_produto.produto_id')
                                        .leftJoin('comentario', 'comentario', 'comentario_produto.comentario_id = comentario.id')
                                        .leftJoin('usuario', 'usuario', 'comentario.usuario_id = usuario.id')
                                        .leftJoin('pessoa', 'pessoa', 'usuario.pessoa_id = pessoa.id')
                                        .select([
                                            'produto.id AS idProduto',
                                            'produto.nome AS nmProduto',
                                            'produto.descricao AS descricao',
                                            'imagem.imagem AS imagem',
                                            'comentario.comentario AS comentario',
                                            'usuario.nick AS nick',
                                            'pessoa.email AS email'
                                        ])
                                        .where('produto.id = :produtoId', { produtoId })
                                        .getRawMany();
    }
}