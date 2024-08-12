import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioLike } from "src/entities/usuario-like.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsuarioLikeService {
    constructor(
        @InjectRepository(UsuarioLike)
        private readonly _usuarioLikeRepository: Repository<UsuarioLike>
    ){}

    delete(idUsuario: number, idProduto: number) {
        this._usuarioLikeRepository.delete({
            usuarioId: idUsuario,
            produtoId: idProduto,
        });
    }

    async save(usuarioLike: UsuarioLike) {
        return await this._usuarioLikeRepository.query(
            `INSERT INTO usuario_like (produto_id, usuario_id)
             VALUES ($1, $2)`,
            [usuarioLike.produtoId, usuarioLike.usuarioId]
        );
    }

    get(usuarioId: number, produtoId: number) {
        return this._usuarioLikeRepository.findOne({
            where: {
                usuarioId: usuarioId, 
                produtoId: produtoId,
            },
        });
    }
}