import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import DbConfig from './config/bd.config';
import { PessoaModule } from './pessoa/pessoa.module';
import { ToolsModule } from './tools/tools.module';
import { UsuarioModule } from './usuario/usuario.module';

const modules = [
  PessoaModule,
  UsuarioModule,
  ToolsModule,
  AuthModule,
  JwtModule
]

@Module({
  imports: [
    ...modules,
    TypeOrmModule.forRoot(DbConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
