import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';

@Controller()
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @MessagePattern('createWarehouse')
  create(@Payload() createWarehouseDto: CreateWarehouseDto) {
    return this.warehouseService.create(createWarehouseDto);
  }

  @MessagePattern('findAllWarehouse')
  findAll() {
    return this.warehouseService.findAll();
  }

  @MessagePattern('findOneWarehouse')
  findOne(@Payload() id: number) {
    return this.warehouseService.findOne(id);
  }

  @MessagePattern('updateWarehouse')
  update(@Payload() updateWarehouseDto: UpdateWarehouseDto) {
    return this.warehouseService.update(updateWarehouseDto.id, updateWarehouseDto);
  }

  @MessagePattern('removeWarehouse')
  remove(@Payload() id: number) {
    return this.warehouseService.remove(id);
  }
}
