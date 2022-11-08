import { Injectable } from '@nestjs/common';
import { CreateTypePersonDto } from './dto/create-type_person.dto';
import { UpdateTypePersonDto } from './dto/update-type_person.dto';

@Injectable()
export class TypePersonService {
  create(createTypePersonDto: CreateTypePersonDto) {
    return 'This action adds a new typePerson';
  }

  findAll() {
    return `This action returns all typePerson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typePerson`;
  }

  update(id: number, updateTypePersonDto: UpdateTypePersonDto) {
    return `This action updates a #${id} typePerson`;
  }

  remove(id: number) {
    return `This action removes a #${id} typePerson`;
  }
}
