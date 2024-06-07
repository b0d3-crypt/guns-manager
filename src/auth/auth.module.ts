import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtConfig } from "src/config/jwt.config";
import { Usuario } from "src/entities/usuario.entity";
import { UsuarioService } from "src/usuario/usuario.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
    imports: [
        JwtModule.register(JwtConfig),
        TypeOrmModule.forFeature([Usuario])
    ],
    providers: [
        AuthService,
        UsuarioService,
        JwtStrategy,
    ],
    controllers: [AuthController]
})
export class AuthModule{}