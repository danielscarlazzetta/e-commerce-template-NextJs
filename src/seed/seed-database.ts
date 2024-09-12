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

    //3. Preguntar a la base de datos los ids de las categorias
    const categoriesDB = await prisma.category.findMany();
    console.log(categoriesDB)
    
    const categoriesMap = categoriesDB.reduce( (map, category) => {
        
        map[ category.name.toLowerCase() ] = category.id;
        return map;
        
    }, {} as Record<string, string>);//<string = category, string = id>
    console.log(categoriesMap)

    console.log(categoriesData)
    console.log('Seed ejecutado')
}


(() => {
    //evitamos que se ejecute el seed en produccion
    if (process.env.NODE_ENV === 'production') return;
    main();
})();