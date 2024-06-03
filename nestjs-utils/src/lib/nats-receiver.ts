import { UsePipes, applyDecorators } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ZodValidationPipe } from './zod-validation-pipe';

import { NatsMessage } from './nats-message';

export const NatsReceiver = <K extends keyof typeof NatsMessage>(
  pattern: K
) => {
  return applyDecorators(
    UsePipes(new ZodValidationPipe(NatsMessage[pattern])),
    EventPattern(pattern)
  );
};
