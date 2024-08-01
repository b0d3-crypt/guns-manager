import { Body, Controller, Put } from "@nestjs/common";
import { ProdutoLike } from "src/entities/produto-like.entity";
import { ProdutoLikeService } from "./produto-like.service";

@Controller('produto-like')
export class ProdutoLikeController {
    constructor(
        private _produtoLikeService: ProdutoLikeService
    ){}

    @Put()
    async atualizarLike(@Body() produtoLike: ProdutoLike): Promise<ProdutoLike> {
        return this._produtoLikeService.save(produtoLike);
    }
}