import { Controller, Get } from '@nestjs/common';

import { NatsClient } from '@nx-nats/nestjs-utils';

@Controller()
export class AppController {
  constructor(private natsClient: NatsClient) {}

  @Get('create-order')
  async createOrder() {
    const orderResult = await this.natsClient.send('createOrder', {
      productId: 'iphone-15',
      quantity: 5,
    });
    return { orderResult };
  }

  @Get('create-order-broken')
  async createOrderBroken() {
    const orderResult = await this.natsClient.send('createOrder', {
      productId: 'iphone-15',
      quantity: '5' as any, // added on purpose to simulate a validation error
    });
    return { orderResult };
  }

  @Get('delete-order')
  async deleteOrder() {
    const orderResult = await this.natsClient.send('deleteOrder', {
      orderToDelete: 'order-123',
    });
    return { orderResult };
  }
}
