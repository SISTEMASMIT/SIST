import { Controller, Get } from '@nestjs/common';
import { TrakingService } from './traking.service';

@Controller()
export class TrakingController {
  constructor(private readonly trakingService: TrakingService) {}

  @Get()
  getHello(): string {
    return this.trakingService.getHello();
  }
}
