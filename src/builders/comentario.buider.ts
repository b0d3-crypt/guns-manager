import { Comentario } from "src/entities/comentario.entity";
import { Usuario } from "src/entities/usuario.entity";

export class ComentariosBuilder {
    private comentario: Comentario;

    constructor() {
        this.comentario = new Comentario();
    }

    setId(id: number): ComentariosBuilder {
        this.comentario.id = id;
        return this;
    }

    setComentario(comentario: string): ComentariosBuilder {
        this.comentario.comentario = comentario;
        return this;
    }

    setUsuario(usuario: Usuario): ComentariosBuilder {
        this.comentario.usuario = usuario;
        return this;
    } 

    build(): Comentario {
        return this.comentario;
    }
}