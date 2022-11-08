import { Injectable } from '@nestjs/common';
import { CreateTrakingSistDto } from './dto/create-traking_sist.dto';
import { UpdateTrakingSistDto } from './dto/update-traking_sist.dto';

@Injectable()
export class TrakingSistService {
  create(createTrakingSistDto: CreateTrakingSistDto) {
    return 'This action adds a new trakingSist';
  }

  findAll() {
    return `This action returns all trakingSist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trakingSist`;
  }

  update(id: number, updateTrakingSistDto: UpdateTrakingSistDto) {
    return `This action updates a #${id} trakingSist`;
  }

  remove(id: number) {
    return `This action removes a #${id} trakingSist`;
  }
}
