import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { ServiceSistModule } from './service_sist/service_sist.module';
import { FollowmentModule } from './followment/followment.module';
import { EvidenceModule } from './evidence/evidence.module';
import { ChangeModule } from './change/change.module';
import { ConfigModule } from '@nestjs/config';
import { typeOrmAsyncConfig } from './typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ServiceSistModule, FollowmentModule, EvidenceModule, ChangeModule,ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `./apps/sist/config/env/${process.env.NODE_ENV}.env`}),
  TypeOrmModule.forRootAsync(typeOrmAsyncConfig)],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
