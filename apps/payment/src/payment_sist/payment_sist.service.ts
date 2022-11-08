import { Injectable } from '@nestjs/common';
import { CreatePaymentSistDto } from './dto/create-payment_sist.dto';
import { UpdatePaymentSistDto } from './dto/update-payment_sist.dto';

@Injectable()
export class PaymentSistService {
  create(createPaymentSistDto: CreatePaymentSistDto) {
    return 'This action adds a new paymentSist';
  }

  findAll() {
    return `This action returns all paymentSist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentSist`;
  }

  update(id: number, updatePaymentSistDto: UpdatePaymentSistDto) {
    return `This action updates a #${id} paymentSist`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentSist`;
  }
}
