import { Module } from '@nestjs/common';
import { ChangeService } from './change.service';
import { ChangeController } from './change.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Change } from './entities/change.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Change])],
  controllers: [ChangeController],
  providers: [ChangeService]
})
export class ChangeModule {}
