import { Controller, Get, Param } from "@nestjs/common";
import { ProdutoImagem } from "src/dtos/produto-imagem.dto";
import { ProdutoReponse } from "src/dtos/produto-response.dto";
import { ProdutoService } from "./produto.service";

@Controller('produtos')
export class ProdutoController {
    constructor(
        private _produtoService: ProdutoService
    ){}

    @Get(':offset/:limit')
    async findProdutosImagem(@Param('offset') offset: number, @Param('limit') limit: number): Promise<ProdutoImagem[]> {
        return this._produtoService.findProdutoAndImagem(offset, limit);
    }

    @Get(':idProduto')
    async findProdutoAndComentario(@Param('idProduto') idProduto: number): Promise<ProdutoReponse[]> {
        return this._produtoService.findProdutoAndComentario(idProduto);
    }
}