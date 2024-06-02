import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Pessoa } from "src/entities/pessoa.entity";
import { Repository } from "typeorm";

@Injectable()
export class PessoaService {
    constructor(
        @InjectRepository(Pessoa)
        private readonly _pessoaRepository: Repository<Pessoa>,
    ){}

    async save(pessoa: Pessoa): Promise<Pessoa> {
        return this._pessoaRepository.save(pessoa);
    } 

    async findAll(): Promise<Pessoa[]> {
        return this._pessoaRepository.find();
    }
}