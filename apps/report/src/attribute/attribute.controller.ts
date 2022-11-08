import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AttributeService } from './attribute.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';

@Controller()
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) {}

  @MessagePattern('createAttribute')
  create(@Payload() createAttributeDto: CreateAttributeDto) {
    return this.attributeService.create(createAttributeDto);
  }

  @MessagePattern('findAllAttribute')
  findAll() {
    return this.attributeService.findAll();
  }

  @MessagePattern('findOneAttribute')
  findOne(@Payload() id: number) {
    return this.attributeService.findOne(id);
  }

  @MessagePattern('updateAttribute')
  update(@Payload() updateAttributeDto: UpdateAttributeDto) {
    return this.attributeService.update(updateAttributeDto.id, updateAttributeDto);
  }

  @MessagePattern('removeAttribute')
  remove(@Payload() id: number) {
    return this.attributeService.remove(id);
  }
}
