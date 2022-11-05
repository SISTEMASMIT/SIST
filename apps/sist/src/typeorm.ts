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
      username: process.env.USER,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
      entities: [`${__dirname}/src/**/entities/**.entity.{ts,js}`],
      migrations: [__dirname + '/src/database/migrations/*{.ts,.js}'],
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      connectorPackage:"mysql2",
      synchronize: true,
      logging: true,
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: process.env.HOST,
  port: parseInt(process.env.PORT, 10),
  username: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  entities: [__dirname + '/src/**/entitites/*.entity.{js,ts}'],
      migrations: [__dirname + '/src/database/migrations/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: false,
  logging: true,
};