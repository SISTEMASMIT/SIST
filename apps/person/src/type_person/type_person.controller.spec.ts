import { Test, TestingModule } from '@nestjs/testing';
import { TypePersonController } from './type_person.controller';
import { TypePersonService } from './type_person.service';

describe('TypePersonController', () => {
  let controller: TypePersonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypePersonController],
      providers: [TypePersonService],
    }).compile();

    controller = module.get<TypePersonController>(TypePersonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
