import { Usuario } from "src/entities/usuario.entity";

export class ComentarioResponse {
    idProduto: number;
    usuario: Usuario;
    comentario: string;
}