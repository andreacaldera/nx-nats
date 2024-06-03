import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { firstValueFrom } from 'rxjs';
import { CreateOrderDto } from './order-dto';
import { NatsMessage } from './nats-message';
import { z } from 'zod';

@Injectable()
export class NatsClient {
  constructor(
    @Inject('NATS_SERVICE')
    private client: ClientProxy
  ) {}

  async send<K extends keyof NatsMessage, V extends z.infer<NatsMessage[K]>>(
    pattern: K,
    payload: V
  ) {
    return await firstValueFrom(
      this.client.send<CreateOrderDto>(pattern, payload)
    );
  }
}
