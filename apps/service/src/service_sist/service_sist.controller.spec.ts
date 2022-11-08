import { Test, TestingModule } from '@nestjs/testing';
import { ServiceSistController } from './service_sist.controller';
import { ServiceSistService } from './service_sist.service';

describe('ServiceSistController', () => {
  let controller: ServiceSistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceSistController],
      providers: [ServiceSistService],
    }).compile();

    controller = module.get<ServiceSistController>(ServiceSistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
