import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { firstValueFrom } from 'rxjs';
import { CreateOrderDto } from './order-dto';

type NatsMessage = {
  createOrder: CreateOrderDto;
  another: { notImplemented: true };
};

@Injectable()
export class NatsClient {
  constructor(
    @Inject('NATS_SERVICE')
    private client: ClientProxy
  ) {}

  async send<K extends keyof NatsMessage, V extends NatsMessage[K]>(
    pattern: K,
    payload: V
  ) {
    return await firstValueFrom(
      this.client.send<CreateOrderDto>(pattern, payload)
    );
  }
}
