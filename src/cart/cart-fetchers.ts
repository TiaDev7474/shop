import {cookies} from "next/headers";
import {CartDetails , cartSchema} from "@/cart/cart-types";

import { cache } from 'react'
import prisma from "../../prisma/prisma-client";


export const  getCart = cache(async (): Promise<CartDetails | null> => {
    const cookiesStore = cookies();

    const cookieValue = cookiesStore.get('cart')?.value;

    const cart = cartSchema.safeParse(
            cookieValue ? JSON.parse(cookieValue) : null
    )

    if(!cart.success){
        return  null
    }

    return {
        cartItems: [] , totalCount: 0 , totalPrice: 0
    }
})

//move this into product folder

interface Product {

}
export const  getManyProductsByIds = cache(async (productsIds: number[]): Promise<Product[] | null> => {
    return null
})
