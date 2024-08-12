import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Produto } from "./produto.entity";
import { Usuario } from "./usuario.entity";

@Entity('usuario_like')
export class UsuarioLike {

    @PrimaryColumn({ name: 'produto_id' })
    produtoId: number;

    @PrimaryColumn({ name: 'usuario_id' })
    usuarioId: number;

    @ManyToOne(() => Produto)
    @JoinColumn({ name: 'produto_id' })
    produto: Produto;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;
}