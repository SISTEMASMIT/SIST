import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ServiceSistService } from './service_sist.service';
import { CreateServiceSistDto } from './dto/create-service_sist.dto';
import { UpdateServiceSistDto } from './dto/update-service_sist.dto';

@Controller()
export class ServiceSistController {
  constructor(private readonly serviceSistService: ServiceSistService) {}

  @MessagePattern('createServiceSist')
  create(@Payload() createServiceSistDto: CreateServiceSistDto) {
    return this.serviceSistService.create(createServiceSistDto);
  }

  @MessagePattern('findAllServiceSist')
  findAll() {
    return this.serviceSistService.findAll();
  }

  @MessagePattern('findOneServiceSist')
  findOne(@Payload() id: number) {
    return this.serviceSistService.findOne(id);
  }

  @MessagePattern('updateServiceSist')
  update(@Payload() updateServiceSistDto: UpdateServiceSistDto) {
    return this.serviceSistService.update(updateServiceSistDto.id, updateServiceSistDto);
  }

  @MessagePattern('removeServiceSist')
  remove(@Payload() id: number) {
    return this.serviceSistService.remove(id);
  }
}
