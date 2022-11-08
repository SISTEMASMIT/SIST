import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentSistDto } from './create-payment_sist.dto';

export class UpdatePaymentSistDto extends PartialType(CreatePaymentSistDto) {
  id: number;
}
