import { Controller } from "@nestjs/common";
import { ProdutoService } from "./produto.service";

@Controller('produto')
export class ProdutoController {
    constructor(
        private _produtoService: ProdutoService
    ){}
}