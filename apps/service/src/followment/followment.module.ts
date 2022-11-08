import { Module } from '@nestjs/common';
import { FollowmentService } from './followment.service';
import { FollowmentController } from './followment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Followment } from './entities/followment.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Followment])],
  controllers: [FollowmentController],
  providers: [FollowmentService]
})
export class FollowmentModule {}
