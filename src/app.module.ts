import { Module, OnModuleInit } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as fs from 'fs';
import * as path from 'path';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ComentarioProdutoModule } from './comentario-produto/comentario-produto.module';
import { ComentarioModule } from './comentario/comentario.module';
import DbConfig from './config/bd.config';
import { ImagemModule } from './imagem/imagem.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { ProdutoLikeModule } from './produto-like/produto-like.module';
import { ProdutoModule } from './produto/produto.module';
import { ToolsModule } from './tools/tools.module';
import { UsuarioLikeModule } from './usuario-like/usuario-like.module';
import { UsuarioModule } from './usuario/usuario.module';

const modules = [
  PessoaModule,
  UsuarioModule,
  ComentarioModule,
  ProdutoModule,
  ComentarioProdutoModule,
  ImagemModule,
  ProdutoLikeModule,
  UsuarioLikeModule,
  ToolsModule,
  AuthModule,
  JwtModule
];

@Module({
  imports: [
    ...modules,
    TypeOrmModule.forRoot(DbConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly dataSource: DataSource) {}

  async onModuleInit() {
    await this.runSqlScript();
  }

  private async runSqlScript() {
    const sqlFilePath = path.join(__dirname, '../src/sql/data.sql');
    const sql = fs.readFileSync(sqlFilePath, 'utf-8');
    await this.dataSource.query(sql);
  }
}
