import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comentario } from "src/entities/comentario.entity";
import { Repository } from "typeorm";

@Injectable()
export class ComentarioService {
    constructor(
        @InjectRepository(Comentario)
        private readonly _comentarioRepository: Repository<Comentario>
    ){}
}