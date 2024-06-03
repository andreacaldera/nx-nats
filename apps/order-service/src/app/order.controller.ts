import { Controller } from '@nestjs/common';

import {
  MessageReceiver,
  NatsReceiver,
  RequestPayload,
} from '@nx-nats/nestjs-utils';

const pattern = 'createOrder';

type OrderControllerType = {
  createOrder: MessageReceiver<typeof pattern>;
};

@Controller()
export class OrderController implements OrderControllerType {
  @NatsReceiver(pattern)
  createOrder(payload: RequestPayload<typeof pattern>) {
    return {
      productId: `Order created for product ${payload.productId} with quantity ${payload.quantity}`,
    };
  }
}
