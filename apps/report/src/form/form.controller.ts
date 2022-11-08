import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';

@Controller()
export class FormController {
  constructor(private readonly formService: FormService) {}

  @MessagePattern('createForm')
  create(@Payload() createFormDto: CreateFormDto) {
    return this.formService.create(createFormDto);
  }

  @MessagePattern('findAllForm')
  findAll() {
    return this.formService.findAll();
  }

  @MessagePattern('findOneForm')
  findOne(@Payload() id: number) {
    return this.formService.findOne(id);
  }

  @MessagePattern('updateForm')
  update(@Payload() updateFormDto: UpdateFormDto) {
    return this.formService.update(updateFormDto.id, updateFormDto);
  }

  @MessagePattern('removeForm')
  remove(@Payload() id: number) {
    return this.formService.remove(id);
  }
}
