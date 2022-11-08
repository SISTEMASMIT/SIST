import { Module } from '@nestjs/common';
import { ServiceSistService } from './service_sist.service';
import { ServiceSistController } from './service_sist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceSist } from './entities/service_sist.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ServiceSist])],
  controllers: [ServiceSistController],
  providers: [ServiceSistService]
})
export class ServiceSistModule {}
