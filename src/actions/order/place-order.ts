'use server'

import { auth } from "@/auth.config";
import type { Address, Size } from "@/interface";


interface ProductToOrder {
    productId: string;
    quantity: number;
    size: Size;
}

export const placeOrder = async (productId : ProductToOrder[], address : Address) => {

    const session = await auth();
    const userId = session?.user.id;

    if( ! userId ){
        return {
            ok: false,
            message: 'No hay session de usuario'
        }
    }

    console.log({productId, address, userId})

}