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
        
        // 1. obtener paproductos
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

        // obtener el totrtal de paginas

        const totalCount =  await prisma.product.count();
        const totalPages = Math.ceil(totalCount / take)
        // console.log(totalPages)

        return {
            currentPage: page,
            totalPages: totalPages,
            products: products.map(product => ({
                ...product,
                images: product.ProductImage.map(image => image.url)
            }))

        }

    } catch (error) {
        throw new Error('No se pudo cargar los productos')
    }
}