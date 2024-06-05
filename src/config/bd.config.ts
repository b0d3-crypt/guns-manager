import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const DbConfig: TypeOrmModuleOptions= {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'guns',
    entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true
}
export default DbConfig 