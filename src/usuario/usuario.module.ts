import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pessoa } from "src/entities/pessoa.entity";
import { Usuario } from "src/entities/usuario.entity";
import { PessoaService } from "src/pessoa/pesssoa.service";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";

const repository = [
    Usuario, 
    Pessoa
]

@Module({
    imports: [
        TypeOrmModule.forFeature([...repository])
    ],
    controllers: [UsuarioController],
    providers: [UsuarioService, PessoaService],
    exports: [UsuarioService]
})
export class UsuarioModule {}