import { Controller } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import {
  CreateOrderDto,
  NatsReceiver,
  createOrderSchema,
} from '@nx-nats/nestjs-utils';

@Controller()
export class OrderController {
  @NatsReceiver('createOrder', createOrderSchema)
  async createOrder(@Payload() payload: CreateOrderDto) {
    return `Order created for product ${payload.productId} with quantity ${payload.quantity}`;
  }
}
