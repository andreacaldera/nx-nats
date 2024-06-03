import { z } from 'zod';

export const createOrderSchema = z
  .object({
    productId: z.string(),
    quantity: z.number(),
  })
  .required();

export type CreateOrderDto = z.infer<typeof createOrderSchema>;

export const deleteOrderSchema = z
  .object({
    orderToDelete: z.string(),
  })
  .required();

export type DeleteOrderSchema = z.infer<typeof deleteOrderSchema>;
