import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceSistDto } from './create-service_sist.dto';

export class UpdateServiceSistDto extends PartialType(CreateServiceSistDto) {
  id: number;
}
