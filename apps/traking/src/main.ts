import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { TrakingModule } from './traking.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TrakingModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
