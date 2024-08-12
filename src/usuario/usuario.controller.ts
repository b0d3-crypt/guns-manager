import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query, Res, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Response } from "express";
import { AuthGuard } from "src/auth/auth.guard";
import { UsuarioDTO } from "src/dtos/usuario.dto";
import { Usuario } from "src/entities/usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('user')
export class UsuarioController {

    constructor(
        private _usuarioService: UsuarioService
    ){}

    @UseGuards(AuthGuard)
    @Get()
    @HttpCode(200)
    @ApiOperation({ summary: 'Listar todos os usuários' })
    @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso', type: Usuario, isArray: true })
    async findAll(): Promise<Usuario[]> {
        const usuarios: Usuario[] = await this._usuarioService.findAll();
        return usuarios;
    } 

    @Get('/usuario')
    @HttpCode(200)
    @ApiOperation({ summary: 'Listar todos os usuários' })
    @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso', type: Usuario })
    async getByNameAndEmail(@Query('nome', ) nome: string, @Query('email') email: string): Promise<Usuario> {
        const usuario: Usuario = await this._usuarioService.getByNameAndEmail(nome[0], email[0]);
        return usuario;
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

    @Post('/user')
    @HttpCode(201)
    @ApiOperation({ summary: 'Criar um novo usuário' }) 
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' }) 
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    async saveUserForApp(@Body() usuarioDTO: UsuarioDTO, @Res() res: Response) {
        try {
            const usuario: Usuario = await this._usuarioService.saveUserForApp(usuarioDTO);
            return res.status(HttpStatus.CREATED).send(usuario);
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: error.message})
        }
    }
}