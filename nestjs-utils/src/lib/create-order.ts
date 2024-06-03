import { z } from 'zod';

export const createOrderRequestSchema = z
  .object({
    productId: z.string(),
    quantity: z.number(),
  })
  .required();

export const createOrderResponseSchema = z
  .object({
    productId: z.string(),
  })
  .required();

export type CreateOrderRequestDto = z.infer<typeof createOrderRequestSchema>;
