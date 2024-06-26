
import { z } from 'zod';

export const cartSchema = z
    .array(
        z.object({
            productId: z.number(),
            count: z.number(),
        }),
    )
    .min(1);

export type Cart = z.infer<typeof cartSchema>;

export type CartItem = {
    product: any;
    count: number;
};

export type CartDetails = {
    cartItems: CartItem[];
    totalPrice: number;
    totalCount: number;
};
