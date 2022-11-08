import { Test, TestingModule } from '@nestjs/testing';
import { ReportSistController } from './report_sist.controller';
import { ReportSistService } from './report_sist.service';

describe('ReportSistController', () => {
  let controller: ReportSistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportSistController],
      providers: [ReportSistService],
    }).compile();

    controller = module.get<ReportSistController>(ReportSistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
