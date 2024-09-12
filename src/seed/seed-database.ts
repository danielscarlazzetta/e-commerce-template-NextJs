import prisma from '../lib/prisma'
import { initialData } from "./seed";


async function main() {

    // 1. borrar data
    await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
    ])

    // console.log(initialData)
    console.log('Seed ejecutado')
}


(() => {
    //evitamos que se ejecute el seed en produccion
    if (process.env.NODE_ENV === 'production') return;
    main();
})();