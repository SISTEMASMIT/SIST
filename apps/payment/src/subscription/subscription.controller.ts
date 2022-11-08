import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Controller()
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @MessagePattern('createSubscription')
  create(@Payload() createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionService.create(createSubscriptionDto);
  }

  @MessagePattern('findAllSubscription')
  findAll() {
    return this.subscriptionService.findAll();
  }

  @MessagePattern('findOneSubscription')
  findOne(@Payload() id: number) {
    return this.subscriptionService.findOne(id);
  }

  @MessagePattern('updateSubscription')
  update(@Payload() updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.subscriptionService.update(updateSubscriptionDto.id, updateSubscriptionDto);
  }

  @MessagePattern('removeSubscription')
  remove(@Payload() id: number) {
    return this.subscriptionService.remove(id);
  }
}
