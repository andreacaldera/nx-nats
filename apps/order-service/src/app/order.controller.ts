import { Controller, UsePipes } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import {
  CreateOrderDto,
  ZodValidationPipe,
  createOrderSchema,
} from '@nx-nats/nestjs-utils';

@Controller()
export class OrderController {
  @UsePipes(new ZodValidationPipe(createOrderSchema))
  @EventPattern('createOrder')
  async createOrder(@Payload() payload: CreateOrderDto) {
    return `Order created for product ${payload.productId} with quantity ${payload.quantity}`;
  }
}
