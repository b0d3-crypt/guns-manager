import { Pessoa } from "src/entities/pessoa.entity";
import { Usuario } from "src/entities/usuario.entity";

export class UsuarioBuilder {

    private usuario: Usuario

    constructor() {
        this.usuario = new Usuario();
    }

    setId(id: number): UsuarioBuilder {
        this.usuario.id = id;
        return this;
    }

    setNick(nick: string): UsuarioBuilder {
        this.usuario.nick = nick; 
        return this;
    }

    setPassword(password: string): UsuarioBuilder {
        this.usuario.password = password;
        return this;
    }

    setPessoa(pessoa: Pessoa): UsuarioBuilder {
        this.usuario.pessoa = pessoa;
        return this;
    }

    build() {
        return this.usuario;
    }
}