import { Controller, Get, Param } from "@nestjs/common";
import { ProdutoImagem } from "src/dtos/produto-imagem.dto";
import { ProdutoReponse } from "src/dtos/produto-response.dto";
import { ProdutoService } from "./produto.service";

@Controller('produtos')
export class ProdutoController {
    constructor(
        private _produtoService: ProdutoService
    ){}

    @Get()
    async findProdutosImagem(): Promise<ProdutoImagem[]> {
        return this._produtoService.findProdutoAndImagem();
    }

    @Get(':idProduto')
    async findProdutoAndComentario(@Param('idProduto') idProduto: number): Promise<ProdutoReponse[]> {
        return this._produtoService.findProdutoAndComentario(idProduto);
    }
}