import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PaymentSistModule } from './payment_sist/payment_sist.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ChangeModule } from './change/change.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './typeorm';

@Module({
  imports: [PaymentSistModule, SubscriptionModule, InvoiceModule, ChangeModule,ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `./apps/service/config/env/${process.env.NODE_ENV}.env`}),
  TypeOrmModule.forRootAsync(typeOrmAsyncConfig)],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
