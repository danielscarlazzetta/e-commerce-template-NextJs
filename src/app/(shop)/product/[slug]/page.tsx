export const relavidate = 1000;

import { getProductBySlug } from "@/actions";
import { ProductMobileSlideShow, ProductSlideShow, QuantitySelector, SizeSelector, StockLabel } from "@/components";
import { title_font } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { IoCartOutline } from "react-icons/io5";


interface Props {
    params: {
        slug: string;
    }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug

    const product = await getProductBySlug(slug)

    // const previousImages = (await parent).openGraph?.images || []

    return {
        title: product?.title ?? 'Producto no encontrado',
        description: product?.description ?? '',
        openGraph: {
            title: product?.title ?? 'Producto no encontrado',
            description: product?.description ?? '',
            // images: [], https://queleo.com.product/prod-1/img.png
            images: [`/products/${ product?.images[1]}`],
        },
    }
}


export default async function ProductBySlugPage({ params }: Props) {

    const { slug } = params;
    // const product = initialData.products.find(p => p.slug === slug);
    const product = await getProductBySlug(slug);

    console.log({ product })

    if (!product) {
        notFound();
    }

    return (

        <div className="mt-5 mb-20 lg:mx-52 grid grid-cols-1 md:grid-cols-3 gap-3 ">

            <div className="col-span-1 md:col-span-2">
                {/* Mobile slideshow */}
                <ProductMobileSlideShow
                    images={product.images}
                    title={product.title}
                    className="block md:hidden"
                />

                {/* slideshow */}
                <ProductSlideShow
                    images={product.images}
                    title={product.title}
                    className="hidden md:block" />
            </div>

            {/* detailsProduct */}
            <div className="col-span-1 px-5">
                <h1 className={` ${title_font.className} antialiased font-bold text-xl`}>
                    {product.title}
                </h1>

                <p className="text-lg mb-5">${product.price}</p>

                <StockLabel slug={product.slug} />

                {/* Selector de tallas */}
                <SizeSelector
                    selectedSize={product.sizes[0]}
                    availableSizes={product.sizes} />

                {/* Selector de cantidad */}
                <QuantitySelector
                    quantity={0} />

                {/* Selector de Button */}
                {/* <button className="btn-primary my-5">Agregar carrito</button> */}
                <button
                    className="group relative inline-flex items-center overflow-hidden rounded bg-pink-400 px-8 py-3 text-white focus:outline-none active:bg-pink-600"

                >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                        <IoCartOutline />
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:me-4"> Agregar al carrito </span>
                </button>

                {/* Descripcion */}
                <h3 className="font-bold text-sm">
                    <p className="font-light my-5">
                        {product.description}
                    </p>
                </h3>
            </div>
        </div>
    );
}