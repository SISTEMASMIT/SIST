import { Controller, Get } from '@nestjs/common';
import { ServicioService } from './servicio.service';

@Controller()
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) {}

  @Get()
  getHello(): string {
    return this.servicioService.getHello();
  }
}
