import { z } from 'zod';

export const deleteOrderRequestSchema = z
  .object({
    orderToDelete: z.string(),
  })
  .required();

export const deleteOrderResponseSchema = z
  .object({
    deletedOrder: z.string(),
  })
  .required();

// todo keep? delete?
export type DeleteOrderRequestSchema = z.infer<typeof deleteOrderRequestSchema>;
