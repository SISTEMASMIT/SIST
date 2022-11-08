import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ReportSistService } from './report_sist.service';
import { CreateReportSistDto } from './dto/create-report_sist.dto';
import { UpdateReportSistDto } from './dto/update-report_sist.dto';

@Controller()
export class ReportSistController {
  constructor(private readonly reportSistService: ReportSistService) {}

  @MessagePattern('createReportSist')
  create(@Payload() createReportSistDto: CreateReportSistDto) {
    return this.reportSistService.create(createReportSistDto);
  }

  @MessagePattern('findAllReportSist')
  findAll() {
    return this.reportSistService.findAll();
  }

  @MessagePattern('findOneReportSist')
  findOne(@Payload() id: number) {
    return this.reportSistService.findOne(id);
  }

  @MessagePattern('updateReportSist')
  update(@Payload() updateReportSistDto: UpdateReportSistDto) {
    return this.reportSistService.update(updateReportSistDto.id, updateReportSistDto);
  }

  @MessagePattern('removeReportSist')
  remove(@Payload() id: number) {
    return this.reportSistService.remove(id);
  }
}
