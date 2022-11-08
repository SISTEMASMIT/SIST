import { Injectable } from '@nestjs/common';
import { CreateFollowmentDto } from './dto/create-followment.dto';
import { UpdateFollowmentDto } from './dto/update-followment.dto';

@Injectable()
export class FollowmentService {
  create(createFollowmentDto: CreateFollowmentDto) {
    return 'This action adds a new followment';
  }

  findAll() {
    return `This action returns all followment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} followment`;
  }

  update(id: number, updateFollowmentDto: UpdateFollowmentDto) {
    return `This action updates a #${id} followment`;
  }

  remove(id: number) {
    return `This action removes a #${id} followment`;
  }
}
