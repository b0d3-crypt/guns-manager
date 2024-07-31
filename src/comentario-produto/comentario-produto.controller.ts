import { Controller } from "@nestjs/common";
import { ComentarioProdutoService } from "./comentario-produto.service";

@Controller('comentario-produto')
export class ComentarioProdutoController {
    constructor(
        private _comentarioProdutoService: ComentarioProdutoService
    ){}
}