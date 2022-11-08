import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig}  from './typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ActionModule } from './action/action.module';
import { ResponseModule } from './response/response.module';
import { ServiceModule } from './service/service.module';


@Module({
  imports: [ActionModule,ResponseModule,ServiceModule,
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `./apps/sist/config/env/${process.env.NODE_ENV}.env`}),
  TypeOrmModule.forRootAsync(typeOrmAsyncConfig)
  ]
  ,
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
