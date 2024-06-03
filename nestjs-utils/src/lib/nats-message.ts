import {
  createOrderRequestSchema,
  createOrderResponseSchema,
} from './create-order';
import { z } from 'zod';
import {
  deleteOrderRequestSchema,
  deleteOrderResponseSchema,
} from './delete-order';

// todo type NatsMessage
export const NatsMessage = {
  createOrder: {
    request: createOrderRequestSchema,
    response: createOrderResponseSchema,
  },
  deleteOrder: {
    request: deleteOrderRequestSchema,
    response: deleteOrderResponseSchema,
  },
} as const;

type MessagePattern = keyof typeof NatsMessage;

export type RequestPayload<T extends MessagePattern> = z.infer<
  (typeof NatsMessage)[T]['request']
>;

export type ResponsePayload<T extends MessagePattern> = z.infer<
  (typeof NatsMessage)[T]['response']
>;

export type MessageReceiver<T extends MessagePattern> = (
  payload: RequestPayload<'createOrder'>
) => Promise<ResponsePayload<T>> | ResponsePayload<T>;
