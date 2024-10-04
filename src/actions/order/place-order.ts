'use server'

import { auth } from "@/auth.config";
import type { Address, Size } from "@/interface";
import prisma from "@/lib/prisma";


interface ProductToOrder {
    productId: string;
    quantity: number;
    size: Size;
}

export const placeOrder = async (productId : ProductToOrder[], address : Address) => {

    const session = await auth();
    const userId = session?.user.id;

    // verificar sesion de usuario
    if( ! userId ){
        return {
            ok: false,
            message: 'No hay session de usuario'
        }
    }

    // obtener informacion de los productos
    // NOTA: podemos llevar dos productos con el mismo ID
    const products = await prisma.product.findMany({
        where: {
            id: {
                in : productId.map( p => p.productId)
            }
        }
    });

    // Calcular los montos
    const itemsInOrder = productId.reduce((count, p) => count + p.quantity , 0)
    console.log(itemsInOrder)


    // console.log({productId, address, userId})

}