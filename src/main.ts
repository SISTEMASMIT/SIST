import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as session from 'express-session';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
  // const app = await NestFactory.create(AppModule);
  // app.use(session({
  //   secret:`${process.env.SECRET}`,
  //   resave:false,
  //   saveUninitialized:false
  // }))
  // await app.listen(3000);
}
bootstrap();
