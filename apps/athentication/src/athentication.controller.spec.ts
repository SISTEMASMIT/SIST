import { Test, TestingModule } from '@nestjs/testing';
import { AthenticationController } from './athentication.controller';
import { AthenticationService } from './athentication.service';

describe('AthenticationController', () => {
  let athenticationController: AthenticationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AthenticationController],
      providers: [AthenticationService],
    }).compile();

    athenticationController = app.get<AthenticationController>(AthenticationController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(athenticationController.getHello()).toBe('Hello World!');
  //   });
  // });
});
