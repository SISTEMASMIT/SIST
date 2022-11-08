import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Controller()
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @MessagePattern('createInvoice')
  create(@Payload() createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.create(createInvoiceDto);
  }

  @MessagePattern('findAllInvoice')
  findAll() {
    return this.invoiceService.findAll();
  }

  @MessagePattern('findOneInvoice')
  findOne(@Payload() id: number) {
    return this.invoiceService.findOne(id);
  }

  @MessagePattern('updateInvoice')
  update(@Payload() updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoiceService.update(updateInvoiceDto.id, updateInvoiceDto);
  }

  @MessagePattern('removeInvoice')
  remove(@Payload() id: number) {
    return this.invoiceService.remove(id);
  }
}
