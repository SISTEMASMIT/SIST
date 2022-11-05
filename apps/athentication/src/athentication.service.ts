import { Injectable } from '@nestjs/common';

@Injectable()
export class AthenticationService {
  getHello(): string {
    return 'Hello World!';
  }
}
