import { Controller } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { CreateOrderDto, NatsReceiver } from '@nx-nats/nestjs-utils';

@Controller()
export class OrderController {
  @NatsReceiver('createOrder')
  async createOrder(@Payload() payload: CreateOrderDto) {
    return `Order created for product ${payload.productId} with quantity ${payload.quantity}`;
  }
}
