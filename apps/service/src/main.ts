import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ServiceModule } from './service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ServiceModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
