import { QuantitySelector, SizeSelector } from "@/components";
import { title_font } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { IoCartOutline } from "react-icons/io5";


interface Props {
    params: {
        slug: string;
    }
}


export default function ({ params }: Props) {

    const { slug } = params;
    const product = initialData.products.find(p => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">

            {/* slideshow */}
            <div className="col-span-1 md:col-span-2">
                <h1>hola mundo</h1>
            </div>
            {/* detailsProduct */}
            <div className="col-span-1 px-5">
                <h1 className={` ${title_font.className} antialiased font-bold text-xl`}>
                    {product.title}
                </h1>
                <p className="text-lg mb-5">${product.price}</p>
                {/* Selector de tallas */}
                <SizeSelector
                selectedSize={ product.sizes[0]}
                availableSizes={ product.sizes} />
                {/* Selector de cantidad */}
                <QuantitySelector
                quantity={0} />
                {/* Selector de Button */}
                {/* <button className="btn-primary my-5">Agregar carrito</button> */}
                <button
                    className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"

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