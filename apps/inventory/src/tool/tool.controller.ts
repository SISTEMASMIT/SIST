import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ToolService } from './tool.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';

@Controller()
export class ToolController {
  constructor(private readonly toolService: ToolService) {}

  @MessagePattern('createTool')
  create(@Payload() createToolDto: CreateToolDto) {
    return this.toolService.create(createToolDto);
  }

  @MessagePattern('findAllTool')
  findAll() {
    return this.toolService.findAll();
  }

  @MessagePattern('findOneTool')
  findOne(@Payload() id: number) {
    return this.toolService.findOne(id);
  }

  @MessagePattern('updateTool')
  update(@Payload() updateToolDto: UpdateToolDto) {
    return this.toolService.update(updateToolDto.id, updateToolDto);
  }

  @MessagePattern('removeTool')
  remove(@Payload() id: number) {
    return this.toolService.remove(id);
  }
}
