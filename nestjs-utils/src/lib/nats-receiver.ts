import { UsePipes, applyDecorators } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ZodValidationPipe } from './zod-validation-pipe';

import { NatsMessage } from './nats-message';

export const NatsReceiver = <
  K extends keyof NatsMessage,
  V extends NatsMessage[K]
>(
  pattern: K,
  schema: V
) => {
  return applyDecorators(
    UsePipes(new ZodValidationPipe(schema)),
    EventPattern(pattern)
  );
};
