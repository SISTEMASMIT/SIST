import { NestFactory } from '@nestjs/core';
import { ServicioModule } from './servicio.module';

async function bootstrap() {
  const app = await NestFactory.create(ServicioModule);
  await app.listen(3000);
}
bootstrap();
