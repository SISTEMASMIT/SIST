import { NestFactory } from '@nestjs/core';
import { ReportModule } from './report.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ReportModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
