import { Controller } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { NatsReceiver, PayloadType } from '@nx-nats/nestjs-utils';

const pattern = 'createOrder';

@Controller()
export class OrderController {
  @NatsReceiver(pattern)
  async createOrder(@Payload() payload: PayloadType<typeof pattern>) {
    return `Order created for product ${payload.productId} with quantity ${payload.quantity}`;
  }
}
