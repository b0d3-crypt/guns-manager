import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ComentarioProduto } from "src/entities/comentario-produto.entity";
import { Repository } from "typeorm";

@Injectable()
export class ComentarioProdutoService {
    constructor(
        @InjectRepository(ComentarioProduto)
        private readonly _comentarioProdutoRepository: Repository<ComentarioProduto>
    ){}

    async save(comentarioProduto: ComentarioProduto): Promise<ComentarioProduto> {
        return this._comentarioProdutoRepository.save(comentarioProduto);
    }
}