import { Module } from '@nestjs/common';
import { PaymentSistService } from './payment_sist.service';
import { PaymentSistController } from './payment_sist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentSist } from './entities/payment_sist.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PaymentSist])],
  controllers: [PaymentSistController],
  providers: [PaymentSistService]
})
export class PaymentSistModule {}
