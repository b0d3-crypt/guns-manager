import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt';
import { PessoaBuilder } from "src/builders/pessoa.builder";
import { UsuarioBuilder } from "src/builders/usuario.builder";
import { UsuarioDTO } from "src/dtos/usuario.dto";
import { Pessoa } from "src/entities/pessoa.entity";
import { Usuario } from "src/entities/usuario.entity";
import { TransactionManager } from "src/tools/transaction.manager";
import { Repository } from "typeorm";


@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private _usuarioRepository: Repository<Usuario>,
        private _transactionManager: TransactionManager
    ){}

    async findAll() {
        return this._usuarioRepository.find();
    }

    async create(usuarioDTO: UsuarioDTO) {
        return this._transactionManager.transaction(async (entityManager) => {
            let pessoa = this._setPessoa(usuarioDTO);
            pessoa = await entityManager.save(pessoa);
            const usuario = await this._setUsuario(usuarioDTO, pessoa);
            await entityManager.save(usuario);
        })
    }

    private _setPessoa(usuarioDTO: UsuarioDTO) {
        return new PessoaBuilder()
            .setNome(usuarioDTO.nome)
            .setEmail(usuarioDTO.email)
            .build();
    }

    private async _setUsuario(usuarioDTO: UsuarioDTO, pessoa: Pessoa) {
        return new UsuarioBuilder()
            .setNick(usuarioDTO.nick)
            .setPassword(await bcrypt.hash(usuarioDTO.password, 10))
            .setPessoa(pessoa)
            .build();
    }
}
