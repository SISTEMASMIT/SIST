import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import configuration from 'config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
    load: [configuration],
    isGlobal: true
  }), SequelizeModule.forRoot({
    dialect: 'mariadb',
    host: `${process.env.HOST}`,
    port: parseInt(process.env.PORT),
    username: `${process.env.USER}`,
    password: `${process.env.PASSWORD}`,
    database: `${process.env.DATABASE}`,
    autoLoadModels: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
