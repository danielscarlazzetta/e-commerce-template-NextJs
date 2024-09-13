import { getPaginationProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, SlideMobilPage, SlidePage, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { redirect } from "next/navigation";


// const products = initialData.products;


interface Props {
  searchParams: {
    page?: string;
  }
}

export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } = await getPaginationProductsWithImages({ page });

  // console.log({ currentPage })
  // console.log({ totalPages })

  if (products.length === 0) {
    redirect('/');
  }

  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2" />

      <SlideMobilPage className="block md:hidden" />

      <SlidePage className="hidden md:block" />

      <ProductGrid
        products={products} />

      <Pagination totalPages={ totalPages } />


    </>
  );
}
