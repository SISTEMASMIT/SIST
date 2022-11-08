import { Module } from '@nestjs/common';
import { TrakingSistService } from './traking_sist.service';
import { TrakingSistController } from './traking_sist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrakingSist } from './entities/traking_sist.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TrakingSist])],
  controllers: [TrakingSistController],
  providers: [TrakingSistService]
})
export class TrakingSistModule {}
