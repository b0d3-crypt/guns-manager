import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoLike } from "src/entities/produto-like.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProdutoLikeService {
    constructor(
        @InjectRepository(ProdutoLike)
        private readonly _produtoLikeRepository: Repository<ProdutoLike>
    ){}

    async save(produtoLike: ProdutoLike): Promise<ProdutoLike> {
        return this._produtoLikeRepository.save(produtoLike);
    }

    async put(produtoLike: ProdutoLike) {
        return await this._produtoLikeRepository.query(
            `UPDATE produto_like 
             SET nr_like = $1
             WHERE produto_id = $2`,
            [produtoLike.nrLike, produtoLike.produto_id]
        );
    }

}