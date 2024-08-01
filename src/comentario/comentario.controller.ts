import { Body, Controller, HttpCode, HttpStatus, Post, Res } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Response } from "express";
import { ComentarioResponse } from "src/dtos/comentario-reponse.dto";
import { Comentario } from "src/entities/comentario.entity";
import { ComentarioService } from "./comentario.service";


@Controller('comentarios')
export class ComentarioController {
    constructor(
        private _comentarioServoce: ComentarioService
    ){}

    @Post('/comentario')
    async save(@Body() comentario: Comentario, @Res() res: Response) {
        try {
            await this._comentarioServoce.save(comentario);
            return res.status(HttpStatus.CREATED).send();
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: error.message})
        }
    }

    @Post()
    @HttpCode(201)
    @ApiOperation({ summary: 'Criar um novo Comentário em um produto' }) 
    @ApiResponse({ status: 201, description: 'Comentário criado com sucesso' }) 
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    async comentarProduto(@Body() comentarioResponse: ComentarioResponse, @Res() res: Response) {
        try {
            await this._comentarioServoce.comentarProduto(comentarioResponse);
            return res.status(HttpStatus.CREATED).send();
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: error.message})
        }
    }
}