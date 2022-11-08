import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FollowmentService } from './followment.service';
import { CreateFollowmentDto } from './dto/create-followment.dto';
import { UpdateFollowmentDto } from './dto/update-followment.dto';

@Controller()
export class FollowmentController {
  constructor(private readonly followmentService: FollowmentService) {}

  @MessagePattern('createFollowment')
  create(@Payload() createFollowmentDto: CreateFollowmentDto) {
    return this.followmentService.create(createFollowmentDto);
  }

  @MessagePattern('findAllFollowment')
  findAll() {
    return this.followmentService.findAll();
  }

  @MessagePattern('findOneFollowment')
  findOne(@Payload() id: number) {
    return this.followmentService.findOne(id);
  }

  @MessagePattern('updateFollowment')
  update(@Payload() updateFollowmentDto: UpdateFollowmentDto) {
    return this.followmentService.update(updateFollowmentDto.id, updateFollowmentDto);
  }

  @MessagePattern('removeFollowment')
  remove(@Payload() id: number) {
    return this.followmentService.remove(id);
  }
}
