import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EvidenceService } from './evidence.service';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { UpdateEvidenceDto } from './dto/update-evidence.dto';

@Controller()
export class EvidenceController {
  constructor(private readonly evidenceService: EvidenceService) {}

  @MessagePattern('createEvidence')
  create(@Payload() createEvidenceDto: CreateEvidenceDto) {
    return this.evidenceService.create(createEvidenceDto);
  }

  @MessagePattern('findAllEvidence')
  findAll() {
    return this.evidenceService.findAll();
  }

  @MessagePattern('findOneEvidence')
  findOne(@Payload() id: number) {
    return this.evidenceService.findOne(id);
  }

  @MessagePattern('updateEvidence')
  update(@Payload() updateEvidenceDto: UpdateEvidenceDto) {
    return this.evidenceService.update(updateEvidenceDto.id, updateEvidenceDto);
  }

  @MessagePattern('removeEvidence')
  remove(@Payload() id: number) {
    return this.evidenceService.remove(id);
  }
}
