import { NestFactory } from '@nestjs/core';
import { InventarioModule } from './inventario.module';

async function bootstrap() {
  const app = await NestFactory.create(InventarioModule);
  await app.listen(3000);
}
bootstrap();
