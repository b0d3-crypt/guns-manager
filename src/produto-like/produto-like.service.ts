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

}