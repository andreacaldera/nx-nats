import { Controller, Get } from '@nestjs/common';

import { NatsClient } from '@nx-nats/nestjs-utils';

@Controller()
export class AppController {
  constructor(private natsClient: NatsClient) {}

  @Get()
  async getData() {
    const orderResult = await this.natsClient.send('createOrder', {
      productId: 'iphone-15',
      quantity: 5,
    });
    return { orderResult };
  }
}
