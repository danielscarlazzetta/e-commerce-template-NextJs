import { Product } from "@/interface";

interface Props{
    products: Product[];
}

export const ProductGrid = ({ products} : Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">

            {
                products.map( product => (
                    <span key={ product.slug}>{ product.title}</span>
                ))
            }
        </div>
    );
}