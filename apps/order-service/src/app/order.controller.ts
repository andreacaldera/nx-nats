import { Controller } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import {
  NatsReceiver,
  RequestPayload,
  ResponsePayload,
} from '@nx-nats/nestjs-utils';

const pattern = 'createOrder';

@Controller()
export class OrderController {
  @NatsReceiver(pattern)
  async createOrder(
    @Payload() payload: RequestPayload<typeof pattern>
  ): Promise<ResponsePayload<typeof pattern>> {
    return {
      productId: `Order created for product ${payload.productId} with quantity ${payload.quantity}`,
    };
  }
}
