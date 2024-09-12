import prisma from '../lib/prisma'
import { initialData } from "./seed";


async function main() {

    // 1. borrar data
    await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
    ])


    const { categories, products } = initialData;


    //2. Insertar categorias

    // Primera forma de hacerlo
    // Esta forma funciona pero si quisieramos agregarlas de una en una
    // await prisma.category.create({
    //     data: {
    //         name: 'Shirts',
    //     }
    // })
    // console.log(initialData)

    const categoriesData = categories.map( name => ({ name}))
    await prisma.category.createMany({
        data: categoriesData,
    })

    console.log(categoriesData)
    console.log('Seed ejecutado')
}


(() => {
    //evitamos que se ejecute el seed en produccion
    if (process.env.NODE_ENV === 'production') return;
    main();
})();