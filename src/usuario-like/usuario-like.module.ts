import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioLike } from "src/entities/usuario-like.entity";
import { UsuarioLikeController } from "./usuario-like.controller";
import { UsuarioLikeService } from "./usuario-like.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([UsuarioLike])
    ],
    controllers: [UsuarioLikeController],
    providers: [UsuarioLikeService],
    exports: [UsuarioLikeService]
})
export class UsuarioLikeModule {}