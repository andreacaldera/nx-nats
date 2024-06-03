import { createOrderSchema, deleteOrderSchema } from './order-dto';

export const NatsMessage = {
  createOrder: createOrderSchema,
  deleteOrder: deleteOrderSchema,
} as const;
