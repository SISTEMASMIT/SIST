import { PartialType } from '@nestjs/mapped-types';
import { CreateFollowmentDto } from './create-followment.dto';

export class UpdateFollowmentDto extends PartialType(CreateFollowmentDto) {
  id: number;
}
