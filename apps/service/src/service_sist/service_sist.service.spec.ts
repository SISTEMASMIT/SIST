import { Test, TestingModule } from '@nestjs/testing';
import { ServiceSistService } from './service_sist.service';

describe('ServiceSistService', () => {
  let service: ServiceSistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceSistService],
    }).compile();

    service = module.get<ServiceSistService>(ServiceSistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
