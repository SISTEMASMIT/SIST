import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';


export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mariadb',
      host: process.env.HOST,
      port: parseInt(process.env.PORT, 10),
      username: process.env.USER,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
      entities: [`${__dirname}/src/**/entities/**.entity.{ts,js}`],
      migrations: [__dirname + '/src/database/migrations/*{.ts,.js}'],
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      connectorPackage:"mysql2",
      autoLoadEntities:false,
      synchronize: false,
      logging: true,
    };
  },
};
import * as dotenv from "dotenv";
dotenv.config({ path: `./apps/sist/config/env/${process.env.NODE_ENV}.env`});
export const typeOrmConfig: MysqlConnectionOptions = {
  type: 'mariadb',
  host: process.env.HOST,
  port: parseInt(process.env.PORT, 10),
  username: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  entities: ['./apps/sist/src/**/entities/**.entity.{js,ts}'],
  migrations: ['./apps/sist/src/database/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  connectorPackage:"mysql2",
  synchronize: false,
  logging: true,
};