import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Imagem } from "src/entities/imagem.entity";
import { ImagemController } from "./imagem.controller";
import { ImagemService } from "./imagem.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Imagem])
    ],
    controllers: [ImagemController],
    providers: [ImagemService],
    exports: [ImagemService]
})
export class ImagemModule {}