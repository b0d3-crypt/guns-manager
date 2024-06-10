import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComentarioProduto } from "src/entities/comentario-produto.entity";
import { ComentarioProdutoController } from "./comentario-produto.controller";
import { ComentarioProdutoService } from "./comentario-produto.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([ComentarioProduto])
    ],
    controllers: [ComentarioProdutoController],
    providers: [ComentarioProdutoService],
    exports: [ComentarioProdutoService]
})
export class ComentarioProdutoModule {}