'use server';

import { auth } from '@/auth.config';
import prisma from '@/lib/prisma';

export const getPaginatedOrders = async () => {

    const session = await auth();

    // luego podremos agregar distintos roles
    if( session?.user.role !== 'admin' ){
        return{
            ok: false,
            messagge: 'El usuario debe estar autenticado',
        }
    }

    const orders = await prisma.order.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            OrderAddress: {
                select:{
                    firstName: true,
                    lastName: true,

                    address: true,
                    comuna: true,
                    region: true,
                }
            }
        },
    });


    return {
        ok: true,
        orders: orders,
    }


    
}