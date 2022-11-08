import { PartialType } from '@nestjs/mapped-types';
import { CreateTypePersonDto } from './create-type_person.dto';

export class UpdateTypePersonDto extends PartialType(CreateTypePersonDto) {
  id: number;
}
