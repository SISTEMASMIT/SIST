import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { ChangeModule } from './change/change.module';
import { ReportSistModule } from './report_sist/report_sist.module';
import { FormModule } from './form/form.module';
import { AttributeModule } from './attribute/attribute.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './typeorm';

@Module({
  imports: [ChangeModule, ReportSistModule, FormModule, AttributeModule,ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `./apps/report/config/env/${process.env.NODE_ENV}.env`}),
  TypeOrmModule.forRootAsync(typeOrmAsyncConfig)],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
