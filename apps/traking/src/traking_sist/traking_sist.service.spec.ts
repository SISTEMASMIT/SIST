import { Test, TestingModule } from '@nestjs/testing';
import { TrakingSistService } from './traking_sist.service';

describe('TrakingSistService', () => {
  let service: TrakingSistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrakingSistService],
    }).compile();

    service = module.get<TrakingSistService>(TrakingSistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
