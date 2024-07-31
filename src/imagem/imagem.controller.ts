import { Controller } from "@nestjs/common";
import { ImagemService } from "./imagem.service";

@Controller('imagem')
export class ImagemController {
    constructor(
        private _imagemService: ImagemService
    ){}
    
}