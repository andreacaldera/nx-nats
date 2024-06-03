import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { firstValueFrom } from 'rxjs';

import { NatsMessage } from './nats-message';
import { z } from 'zod';

@Injectable()
export class NatsClient {
  constructor(
    @Inject('NATS_SERVICE')
    private client: ClientProxy
  ) {}

  async send<
    K extends keyof typeof NatsMessage,
    V extends z.infer<(typeof NatsMessage)[K]['request']>,
    R extends z.infer<(typeof NatsMessage)[K]['response']>
  >(pattern: K, payload: V): Promise<R> {
    const response = await firstValueFrom(this.client.send(pattern, payload));
    const responseSchema = NatsMessage[pattern]['response'];
    const parsedResponse = responseSchema.parse(response);
    return parsedResponse as R;
  }
}
