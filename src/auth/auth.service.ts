import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { AuthDTO } from "src/dtos/auth.dto";
import { Usuario } from "src/entities/usuario.entity";
import { UsuarioService } from "src/usuario/usuario.service";
import { JwtPayload } from "./interfaces/jwt-payload.interface";

@Injectable()
export class AuthService {
    constructor(
        private readonly _usuarioService: UsuarioService,
        private readonly _jwtService: JwtService
    ){}

    async login(authDTO: AuthDTO) {
        const usuario: Usuario = await this._usuarioService.get(authDTO.nick);
        const isCorrect = await bcrypt.compare(authDTO.password, usuario.password);
        
        if(!isCorrect)
            throw new Error('Senha incorreta.')
    }

    validateUser(payload: JwtPayload) {
        return
    }
}