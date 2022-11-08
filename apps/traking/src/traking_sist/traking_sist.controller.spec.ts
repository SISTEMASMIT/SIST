import { Test, TestingModule } from '@nestjs/testing';
import { TrakingSistController } from './traking_sist.controller';
import { TrakingSistService } from './traking_sist.service';

describe('TrakingSistController', () => {
  let controller: TrakingSistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrakingSistController],
      providers: [TrakingSistService],
    }).compile();

    controller = module.get<TrakingSistController>(TrakingSistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
