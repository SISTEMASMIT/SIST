import { Module } from '@nestjs/common';
import { ReportSistService } from './report_sist.service';
import { ReportSistController } from './report_sist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportSist } from './entities/report_sist.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ReportSist])],
  controllers: [ReportSistController],
  providers: [ReportSistService]
})
export class ReportSistModule {}
