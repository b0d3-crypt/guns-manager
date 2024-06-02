import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
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
    async findAll(): Promise<Usuario[]> {
        const usuarios: Usuario[] = await this._usuarioService.findAll();
        return usuarios;
    } 

    @Post()
    async save(@Body() usuarioDTO: UsuarioDTO, @Res() res: Response) {
        try {
            await this._usuarioService.create(usuarioDTO);
            return res.status(HttpStatus.CREATED).send();
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: error.message})
        }
    }
}