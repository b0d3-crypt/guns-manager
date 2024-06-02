import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pessoa } from "src/entities/pessoa.entity";
import { PessoaController } from "./pessoa.controller";
import { PessoaService } from "./pesssoa.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Pessoa])
    ],
    controllers:[PessoaController],
    providers:[PessoaService],
    exports:[PessoaService]
}) 
export class PessoaModule {}