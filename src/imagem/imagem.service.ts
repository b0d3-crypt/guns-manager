import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Imagem } from "src/entities/imagem.entity";
import { Repository } from "typeorm";

@Injectable()
export class ImagemService {
    constructor(
        @InjectRepository(Imagem)
        private readonly imagemRepository: Repository<Imagem>
    ){}
    
    async save(imagem: Imagem): Promise<Imagem> {
        return this.imagemRepository.save(imagem);
    }
}