import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DbConfig from './config/bd.config';
import { PessoaModule } from './pessoa/pessoa.module';
import { ToolsModule } from './tools/tools.module';
import { UsuarioModule } from './usuario/usuario.module';

const modules = [
  PessoaModule,
  UsuarioModule,
  ToolsModule
]

@Module({
  imports: [
    TypeOrmModule.forRoot(DbConfig),
    ...modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
