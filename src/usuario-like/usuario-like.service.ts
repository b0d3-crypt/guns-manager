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

    save(usuarioLike: UsuarioLike) {
        this._usuarioLikeRepository.save(usuarioLike);
    }
}