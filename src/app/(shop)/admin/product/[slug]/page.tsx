import { getCategories, getProductBySlug } from "@/actions";
import { Title } from "@/components";
import { redirect } from "next/navigation";
import { ProductForm } from "./ui/ProductForm";


interface Props {
    params: {
        slug: string
    }
}

export default async function ProductPage({ params }: Props) {


    const { slug } = params;

    const [ product, categories] = await Promise.all([
        getProductBySlug(slug),
        getCategories(),
    ])


    //TO DO: new
    if(!product){
        redirect('/admin/products')
    }

    const title = (slug === 'new') ? 'Nuevo Producto' : 'Editar Producto'

    return (
        <>
            <Title title={product?.title ?? ''}></Title>
            <ProductForm product={product} categories={categories}/>
        </>
    )
}