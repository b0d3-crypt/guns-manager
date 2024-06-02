import { Pessoa } from "src/entities/pessoa.entity";

export class PessoaBuilder {

    private pessoa: Pessoa;

    constructor() {
        this.pessoa = new Pessoa();
    }

    setId(id: number): PessoaBuilder {
        this.pessoa.id = id;
        return this;
    }

    setNome(nome: string): PessoaBuilder {
        this.pessoa.nome = nome;
        return this;
    }

    setEmail(email: string): PessoaBuilder {
        this.pessoa.email = email;
        return this;
    }

    build() {
        return this.pessoa;
    }
}