import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentSistService } from './payment_sist.service';
import { CreatePaymentSistDto } from './dto/create-payment_sist.dto';
import { UpdatePaymentSistDto } from './dto/update-payment_sist.dto';

@Controller()
export class PaymentSistController {
  constructor(private readonly paymentSistService: PaymentSistService) {}

  @MessagePattern('createPaymentSist')
  create(@Payload() createPaymentSistDto: CreatePaymentSistDto) {
    return this.paymentSistService.create(createPaymentSistDto);
  }

  @MessagePattern('findAllPaymentSist')
  findAll() {
    return this.paymentSistService.findAll();
  }

  @MessagePattern('findOnePaymentSist')
  findOne(@Payload() id: number) {
    return this.paymentSistService.findOne(id);
  }

  @MessagePattern('updatePaymentSist')
  update(@Payload() updatePaymentSistDto: UpdatePaymentSistDto) {
    return this.paymentSistService.update(updatePaymentSistDto.id, updatePaymentSistDto);
  }

  @MessagePattern('removePaymentSist')
  remove(@Payload() id: number) {
    return this.paymentSistService.remove(id);
  }
}
