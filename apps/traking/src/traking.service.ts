import { Injectable } from '@nestjs/common';

@Injectable()
export class TrakingService {
  getHello(): string {
    return 'Hello World!';
  }
}
