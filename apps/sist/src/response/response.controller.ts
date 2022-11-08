import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ResponseService } from './response.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';

@Controller()
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @MessagePattern('createResponse')
  create(@Payload() createResponseDto: CreateResponseDto) {
    return this.responseService.create(createResponseDto);
  }

  @MessagePattern('findAllResponse')
  findAll() {
    return this.responseService.findAll();
  }

  @MessagePattern('findOneResponse')
  findOne(@Payload() id: number) {
    return this.responseService.findOne(id);
  }

  @MessagePattern('updateResponse')
  update(@Payload() updateResponseDto: UpdateResponseDto) {
    return this.responseService.update(updateResponseDto.id, updateResponseDto);
  }

  @MessagePattern('removeResponse')
  remove(@Payload() id: number) {
    return this.responseService.remove(id);
  }
}
