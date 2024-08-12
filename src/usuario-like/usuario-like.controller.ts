import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UsuarioLike } from "src/entities/usuario-like.entity";
import { UsuarioLikeService } from "./usuario-like.service";

@Controller('usuario-like')
export class UsuarioLikeController {
    constructor(
        private _usuarioLikeService: UsuarioLikeService
    ) {}

    @Delete(':idUsuario/:idProduto')
    async deleteLike(@Param('idUsuario') idUsuario: number, @Param('idProduto') idProduto: number) {
        await this._usuarioLikeService.delete(idUsuario, idProduto);
    }

    @Post()
    async save(@Body() usuarioLike: UsuarioLike) {
        await this._usuarioLikeService.save(usuarioLike);
    }

    @Get(':idUsuario/:idProduto')
    async get(@Param('idUsuario') idUsuario: number, @Param('idProduto') idProduto: number) {
        return await this._usuarioLikeService.get(idUsuario, idProduto);
    }
}