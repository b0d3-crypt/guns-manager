import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
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

    async singIn(authDTO: AuthDTO): Promise<JwtPayload> {
        const usuario: Usuario = await this._usuarioService.get(authDTO.nick);
        const isCorrect = await bcrypt.compare(authDTO.password, usuario.password);

        if(!isCorrect)
            throw new UnauthorizedException;

        let payload: JwtPayload = { sub: usuario.id, username: usuario.nick, token: "" };
        payload.token = await this._jwtService.signAsync(payload)
        return payload;
    }

    async validateUser(payload: JwtPayload) {
        const usuario = await this._usuarioService.getbyId(payload.sub);
        if (!usuario) {
            throw new UnauthorizedException('Usuário não encontrado.');
        }
        return usuario;
    }
}