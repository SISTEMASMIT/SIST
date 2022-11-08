import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TrakingSistService } from './traking_sist.service';
import { CreateTrakingSistDto } from './dto/create-traking_sist.dto';
import { UpdateTrakingSistDto } from './dto/update-traking_sist.dto';

@Controller()
export class TrakingSistController {
  constructor(private readonly trakingSistService: TrakingSistService) {}

  @MessagePattern('createTrakingSist')
  create(@Payload() createTrakingSistDto: CreateTrakingSistDto) {
    return this.trakingSistService.create(createTrakingSistDto);
  }

  @MessagePattern('findAllTrakingSist')
  findAll() {
    return this.trakingSistService.findAll();
  }

  @MessagePattern('findOneTrakingSist')
  findOne(@Payload() id: number) {
    return this.trakingSistService.findOne(id);
  }

  @MessagePattern('updateTrakingSist')
  update(@Payload() updateTrakingSistDto: UpdateTrakingSistDto) {
    return this.trakingSistService.update(updateTrakingSistDto.id, updateTrakingSistDto);
  }

  @MessagePattern('removeTrakingSist')
  remove(@Payload() id: number) {
    return this.trakingSistService.remove(id);
  }
}
