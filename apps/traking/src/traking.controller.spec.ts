import { Test, TestingModule } from '@nestjs/testing';
import { TrakingController } from './traking.controller';
import { TrakingService } from './traking.service';

describe('TrakingController', () => {
  let trakingController: TrakingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TrakingController],
      providers: [TrakingService],
    }).compile();

    trakingController = app.get<TrakingController>(TrakingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(trakingController.getHello()).toBe('Hello World!');
    });
  });
});
