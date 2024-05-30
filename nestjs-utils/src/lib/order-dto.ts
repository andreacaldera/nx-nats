import { z } from 'zod';

export const createOrderSchema = z
  .object({
    productId: z.string(),
    quantity: z.number(),
  })
  .required();

export type CreateOrderDto = z.infer<typeof createOrderSchema>;
