import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicioService {
  getHello(): string {
    return 'Hello World!';
  }
}
