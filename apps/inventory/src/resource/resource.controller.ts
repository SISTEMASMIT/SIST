import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ResourceService } from './resource.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';

@Controller()
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @MessagePattern('createResource')
  create(@Payload() createResourceDto: CreateResourceDto) {
    return this.resourceService.create(createResourceDto);
  }

  @MessagePattern('findAllResource')
  findAll() {
    return this.resourceService.findAll();
  }

  @MessagePattern('findOneResource')
  findOne(@Payload() id: number) {
    return this.resourceService.findOne(id);
  }

  @MessagePattern('updateResource')
  update(@Payload() updateResourceDto: UpdateResourceDto) {
    return this.resourceService.update(updateResourceDto.id, updateResourceDto);
  }

  @MessagePattern('removeResource')
  remove(@Payload() id: number) {
    return this.resourceService.remove(id);
  }
}
