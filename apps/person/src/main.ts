import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PersonModule } from './person.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PersonModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
