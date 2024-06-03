import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Response } from "express";
import { UsuarioDTO } from "src/dtos/usuario.dto";
import { Usuario } from "src/entities/usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('user')
export class UsuarioController {

    constructor(
        private _usuarioService: UsuarioService
    ){}

    @Get()
    @HttpCode(200)
    @ApiOperation({ summary: 'Listar todos os usuários' })
    @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso', type: Usuario, isArray: true })
    async findAll(): Promise<Usuario[]> {
        const usuarios: Usuario[] = await this._usuarioService.findAll();
        return usuarios;
    } 

    @Post()
    @HttpCode(201)
    @ApiOperation({ summary: 'Criar um novo usuário' }) 
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' }) 
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    async save(@Body() usuarioDTO: UsuarioDTO, @Res() res: Response) {
        try {
            await this._usuarioService.create(usuarioDTO);
            return res.status(HttpStatus.CREATED).send();
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: error.message})
        }
    }
}