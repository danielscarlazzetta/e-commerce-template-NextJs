// import { notFound } from "next/navigation";

import { ProductGrid, Title } from "@/components";
import { Category } from "@/interface";
import { initialData } from "@/seed/seed";

const seedProducts = initialData.products;


interface Props {
    params: {
        id: Category;
    }
}


export default function ({ params }: Props) {

    const { id } = params;
    const products = seedProducts.filter(p => p.gender === id);

    const label: Record<Category, string> = {
        'men': 'Hombres',
        'women': 'muejres',
        'kid': 'ninos',
        'unisex': 'Articvulos para Todos'
    }

    // if ( id === 'kids'){
    //     notFound();
    // }

    return (
        <>
            <Title
                title={ `Articulos de ${ (label as any)[id] }`}
                subtitle="Todos los productos"
                className="mb-2" />

            <ProductGrid
                products={products} />


        </>
    );
}