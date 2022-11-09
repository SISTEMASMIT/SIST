import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mariadb',
      host: process.env.HOST,
      port: parseInt(process.env.PORT, 10),
      username: process.env.USERDATABASE,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
      entities: [__dirname +'/src/**/entities/*.entity.{ts,js}'],
      migrations: [__dirname + '/src/database/migrations/*.{ts,js}'],
      extra: {
        charset: 'utf8mb4_spanish2_ci',
      },
      connectorPackage:"mysql2",
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    };
  },
};

import * as dotenv from "dotenv";
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
dotenv.config({ path: `./apps/inventory/config/env/${process.env.NODE_ENV}.env`});
export const typeOrmConfig: MysqlConnectionOptions = {
  type: 'mariadb',
  host: process.env.HOST,
  port: parseInt(process.env.PORT, 10),
  username: process.env.USERDATABASE,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  entities: ['./apps/inventory/src/**/entities/**.entity.{js,ts}'],
  migrations: ['./apps/inventory/src/database/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_spanish2_ci',
  },
  connectorPackage:"mysql2",
  synchronize: false,
  logging: true,
};