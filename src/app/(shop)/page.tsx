import { getPaginationProductsWithImages } from "@/actions";
import { ProductGrid, SlideMobilPage, SlidePage, Title } from "@/components";
import { initialData } from "@/seed/seed";


const products = initialData.products;

export default async function Home() {

  const productsTemp = await getPaginationProductsWithImages();

  return (
    <>
    <Title
    title="Tienda"
    subtitle="Todos los productos"
    className="mb-2" />

    <SlideMobilPage className="block md:hidden" />

    <SlidePage className="hidden md:block"/>

    <ProductGrid
    products={ products } />
    

    </>
  );
}
