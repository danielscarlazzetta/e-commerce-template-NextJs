'use server';

import prisma from "@/lib/prisma";


interface paginationOption {
    page?: number;
    take?: number;
}

export const getPaginationProductsWithImages = async({
    page = 1,
    take = 12,
}: paginationOption) => {

    if(isNaN( Number(page))) page = 1;
    if(page < 1 ) page = 1;

    try {
        
        const products = await prisma.product.findMany({
            //este take es el que se recibe como argumento
            take: take,
            //el skyp basicamente restara la cantidad de elementos, es decir si en total tenemos 200 elementos, este restara los primeros 12 para luego mostrar los siguentes en la paginacion
            skip: ( page - 1 ) * take,
            include: {
                ProductImage: {
                    take: take,
                    select: {
                        url: true
                    }
                }
            }
        })

        // console.log(products);

        return {
            currenmtPage: 1,
            totalPages: 10,
            products: products.map(product => ({
                ...product,
                images: product.ProductImage.map(image => image.url)
            }))

        }

    } catch (error) {
        throw new Error('No se pudo cargar los productos')
    }
}