import { Test, TestingModule } from '@nestjs/testing';
import { ReportSistService } from './report_sist.service';

describe('ReportSistService', () => {
  let service: ReportSistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportSistService],
    }).compile();

    service = module.get<ReportSistService>(ReportSistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
