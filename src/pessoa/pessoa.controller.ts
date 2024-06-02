import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { Response } from 'express';
import { Pessoa } from "src/entities/pessoa.entity";
import { PessoaService } from "./pesssoa.service";

@Controller('pessoa')
export class PessoaController {

    constructor(
        private _pessoaService: PessoaService
    ){}

    @Post()
    async save(@Body() pessoa: Pessoa, @Res() res?: Response) {
        try {
            const novaPessoa = await this._pessoaService.save(pessoa);
            res.status(HttpStatus.CREATED).json(novaPessoa);
        } catch (erro) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao criar usuário' });
            return;
        }
    }


    @Get()
    async findAll(): Promise<Pessoa[]> {
        return this._pessoaService.findAll();
    }
}
