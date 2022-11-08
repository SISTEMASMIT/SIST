import { Injectable } from '@nestjs/common';
import { CreateServiceSistDto } from './dto/create-service_sist.dto';
import { UpdateServiceSistDto } from './dto/update-service_sist.dto';

@Injectable()
export class ServiceSistService {
  create(createServiceSistDto: CreateServiceSistDto) {
    return 'This action adds a new serviceSist';
  }

  findAll() {
    return `This action returns all serviceSist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceSist`;
  }

  update(id: number, updateServiceSistDto: UpdateServiceSistDto) {
    return `This action updates a #${id} serviceSist`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceSist`;
  }
}
