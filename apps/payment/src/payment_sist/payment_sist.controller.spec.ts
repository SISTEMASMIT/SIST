import { Test, TestingModule } from '@nestjs/testing';
import { PaymentSistController } from './payment_sist.controller';
import { PaymentSistService } from './payment_sist.service';

describe('PaymentSistController', () => {
  let controller: PaymentSistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentSistController],
      providers: [PaymentSistService],
    }).compile();

    controller = module.get<PaymentSistController>(PaymentSistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
