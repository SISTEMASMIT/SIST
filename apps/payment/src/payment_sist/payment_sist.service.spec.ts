import { Test, TestingModule } from '@nestjs/testing';
import { PaymentSistService } from './payment_sist.service';

describe('PaymentSistService', () => {
  let service: PaymentSistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentSistService],
    }).compile();

    service = module.get<PaymentSistService>(PaymentSistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
