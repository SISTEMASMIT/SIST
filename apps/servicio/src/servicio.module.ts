import { Module } from '@nestjs/common';
import { ServicioController } from './servicio.controller';
import { ServicioService } from './servicio.service';

@Module({
  imports: [],
  controllers: [ServicioController],
  providers: [ServicioService],
})
export class ServicioModule {}
