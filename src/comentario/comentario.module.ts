import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comentario } from "src/entities/comentario.entity";
import { ComentarioController } from "./comentario.controller";
import { ComentarioService } from "./comentario.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Comentario])
    ],
    controllers: [ComentarioController],
    providers: [ComentarioService],
    exports: [ComentarioService]
})
export class ComentarioModule {}