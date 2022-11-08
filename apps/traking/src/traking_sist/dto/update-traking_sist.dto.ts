import { PartialType } from '@nestjs/mapped-types';
import { CreateTrakingSistDto } from './create-traking_sist.dto';

export class UpdateTrakingSistDto extends PartialType(CreateTrakingSistDto) {
  id: number;
}
