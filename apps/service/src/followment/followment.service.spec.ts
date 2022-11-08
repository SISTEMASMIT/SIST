import { Test, TestingModule } from '@nestjs/testing';
import { FollowmentService } from './followment.service';

describe('FollowmentService', () => {
  let service: FollowmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FollowmentService],
    }).compile();

    service = module.get<FollowmentService>(FollowmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
