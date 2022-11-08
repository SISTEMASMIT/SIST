import { Test, TestingModule } from '@nestjs/testing';
import { FollowmentController } from './followment.controller';
import { FollowmentService } from './followment.service';

describe('FollowmentController', () => {
  let controller: FollowmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowmentController],
      providers: [FollowmentService],
    }).compile();

    controller = module.get<FollowmentController>(FollowmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
