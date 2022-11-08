import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TypePersonService } from './type_person.service';
import { CreateTypePersonDto } from './dto/create-type_person.dto';
import { UpdateTypePersonDto } from './dto/update-type_person.dto';

@Controller()
export class TypePersonController {
  constructor(private readonly typePersonService: TypePersonService) {}

  @MessagePattern('createTypePerson')
  create(@Payload() createTypePersonDto: CreateTypePersonDto) {
    return this.typePersonService.create(createTypePersonDto);
  }

  @MessagePattern('findAllTypePerson')
  findAll() {
    return this.typePersonService.findAll();
  }

  @MessagePattern('findOneTypePerson')
  findOne(@Payload() id: number) {
    return this.typePersonService.findOne(id);
  }

  @MessagePattern('updateTypePerson')
  update(@Payload() updateTypePersonDto: UpdateTypePersonDto) {
    return this.typePersonService.update(updateTypePersonDto.id, updateTypePersonDto);
  }

  @MessagePattern('removeTypePerson')
  remove(@Payload() id: number) {
    return this.typePersonService.remove(id);
  }
}
