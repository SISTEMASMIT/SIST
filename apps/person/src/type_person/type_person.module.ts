import { Module } from '@nestjs/common';
import { TypePersonService } from './type_person.service';
import { TypePersonController } from './type_person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypePerson } from './entities/type_person.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TypePerson])],
  controllers: [TypePersonController],
  providers: [TypePersonService]
})
export class TypePersonModule {}
