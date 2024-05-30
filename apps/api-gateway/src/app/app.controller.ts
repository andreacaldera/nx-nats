import { Controller, Get, Inject } from '@nestjs/common';

import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderDto } from '@nx-nats/nestjs-utils';

@Controller()
export class AppController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Get()
  async getData() {
    const orderResult = await firstValueFrom(
      this.natsClient.send<CreateOrderDto>('createOrder', {
        productId: 'iphone-15',
        quantity: 5,
      })
    );
    return { orderResult };
  }
}
