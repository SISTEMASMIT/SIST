import { Injectable } from '@nestjs/common';
import { CreateReportSistDto } from './dto/create-report_sist.dto';
import { UpdateReportSistDto } from './dto/update-report_sist.dto';

@Injectable()
export class ReportSistService {
  create(createReportSistDto: CreateReportSistDto) {
    return 'This action adds a new reportSist';
  }

  findAll() {
    return `This action returns all reportSist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reportSist`;
  }

  update(id: number, updateReportSistDto: UpdateReportSistDto) {
    return `This action updates a #${id} reportSist`;
  }

  remove(id: number) {
    return `This action removes a #${id} reportSist`;
  }
}
