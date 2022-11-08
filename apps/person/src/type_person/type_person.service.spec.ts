import { Test, TestingModule } from '@nestjs/testing';
import { TypePersonService } from './type_person.service';

describe('TypePersonService', () => {
  let service: TypePersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypePersonService],
    }).compile();

    service = module.get<TypePersonService>(TypePersonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
