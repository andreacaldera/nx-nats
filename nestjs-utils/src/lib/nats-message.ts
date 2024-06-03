import { createOrderSchema, deleteOrderSchema } from './order-dto';

export type NatsMessage = {
  createOrder: typeof createOrderSchema;
  deleteOrder: typeof deleteOrderSchema;
};
