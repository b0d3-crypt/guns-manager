import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ComentarioProdutoBuilder } from "src/builders/comentario-produto.buider";
import { ComentariosBuilder } from "src/builders/comentario.buider";
import { ComentarioResponse } from "src/dtos/comentario-reponse.dto";
import { ComentarioProduto } from "src/entities/comentario-produto.entity";
import { Comentario } from "src/entities/comentario.entity";
import { TransactionManager } from "src/tools/transaction.manager";
import { Repository } from "typeorm";

@Injectable()
export class ComentarioService {
    constructor(
        @InjectRepository(Comentario)
        private readonly _comentarioRepository: Repository<Comentario>,
        private _transactionManager: TransactionManager
    ){}

    async save(comentario: Comentario): Promise<Comentario> {
        return this._comentarioRepository.save(comentario);
    }

    async comentarProduto(comentarioResponse: ComentarioResponse) {
        try {
            this._transactionManager.transaction(async (entityManager) => {
                let comentario: Comentario = this._setComentario(comentarioResponse);
                comentario = await entityManager.save(comentario);
                const comentarioProduto: ComentarioProduto = this._setComentarioProduto(comentarioResponse.idProduto, comentario.id);
                await entityManager.save(comentarioProduto);
            });
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }

    private _setComentario(comentarioResponse: ComentarioResponse) {
        return new ComentariosBuilder()
        .setComentario(comentarioResponse.comentario)
        .setUsuario(comentarioResponse.usuario)
        .build()
    }

    private _setComentarioProduto(idProduto: number, idComentario: number) {
        return new ComentarioProdutoBuilder()
        .setIdComentario(idComentario)
        .setIdProduto(idProduto)
        .build()
    }
}