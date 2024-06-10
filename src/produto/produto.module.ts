import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "src/entities/produto.entity";
import { ProdutoController } from "./prodito.controller";
import { ProdutoService } from "./produto.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Produto])
    ],
    controllers: [ProdutoController],
    providers: [ProdutoService],
    exports: [ProdutoService]
})
export class ProdutoModule {}