import { Module } from '@nestjs/common';
import { AthenticationController } from './athentication.controller';
import { AthenticationService } from './athentication.service';

@Module({
  imports: [],
  controllers: [AthenticationController],
  providers: [AthenticationService],
})
export class AthenticationModule {}
