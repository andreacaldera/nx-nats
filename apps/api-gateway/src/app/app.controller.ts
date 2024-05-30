import { Controller, Get, Inject } from '@nestjs/common';

import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Get()
  async getData() {
    const data = await firstValueFrom(
      this.natsClient.send('createPayment', 'Request to order service')
    );
    return `data ${data}`;
  }
}
