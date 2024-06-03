import { createOrderSchema, deleteOrderSchema } from './order-dto';
import { z } from 'zod';

export const NatsMessage = {
  createOrder: createOrderSchema,
  deleteOrder: deleteOrderSchema,
} as const;

type MessagePattern = keyof typeof NatsMessage;

export type PayloadType<T extends MessagePattern> = z.infer<
  (typeof NatsMessage)[T]
>;
