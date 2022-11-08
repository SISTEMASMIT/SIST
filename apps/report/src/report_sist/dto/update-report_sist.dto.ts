import { PartialType } from '@nestjs/mapped-types';
import { CreateReportSistDto } from './create-report_sist.dto';

export class UpdateReportSistDto extends PartialType(CreateReportSistDto) {
  id: number;
}
