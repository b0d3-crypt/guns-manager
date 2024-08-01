import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoLike } from "src/entities/produto-like.entity";
import { ProdutoLikeController } from "./produto-like.controller";
import { ProdutoLikeService } from "./produto-like.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([ProdutoLike])
    ],
    controllers: [ProdutoLikeController],
    providers: [ProdutoLikeService],
    exports: [ProdutoLikeService]
})
export class ProdutoLikeModule {}