import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HumanService } from './human.service';
import { CreateHumanDto } from './dto/create-human.dto';
import { UpdateHumanDto } from './dto/update-human.dto';

@Controller()
export class HumanController {
  constructor(private readonly humanService: HumanService) {}

  @MessagePattern('createHuman')
  create(@Payload() createHumanDto: CreateHumanDto) {
    return this.humanService.create(createHumanDto);
  }

  @MessagePattern('findAllHuman')
  findAll() {
    return this.humanService.findAll();
  }

  @MessagePattern('findOneHuman')
  findOne(@Payload() id: number) {
    return this.humanService.findOne(id);
  }

  @MessagePattern('updateHuman')
  update(@Payload() updateHumanDto: UpdateHumanDto) {
    return this.humanService.update(updateHumanDto.id, updateHumanDto);
  }

  @MessagePattern('removeHuman')
  remove(@Payload() id: number) {
    return this.humanService.remove(id);
  }
}
