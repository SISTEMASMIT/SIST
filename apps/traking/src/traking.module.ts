import { Module } from '@nestjs/common';
import { TrakingController } from './traking.controller';
import { TrakingService } from './traking.service';
import { ChangeModule } from './change/change.module';
import { TrakingSistModule } from './traking_sist/traking_sist.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './typeorm';

@Module({
  imports: [ChangeModule, TrakingSistModule,ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `./apps/traking/config/env/${process.env.NODE_ENV}.env`}),
  TypeOrmModule.forRootAsync(typeOrmAsyncConfig)],
  controllers: [TrakingController],
  providers: [TrakingService],
})
export class TrakingModule {}
