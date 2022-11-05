import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AthenticationModule } from './athentication.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AthenticationModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
