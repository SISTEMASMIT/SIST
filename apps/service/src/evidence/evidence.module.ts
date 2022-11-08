import { Module } from '@nestjs/common';
import { EvidenceService } from './evidence.service';
import { EvidenceController } from './evidence.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evidence } from './entities/evidence.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Evidence])],
  controllers: [EvidenceController],
  providers: [EvidenceService]
})
export class EvidenceModule {}
