import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoRemoveCircleOutline, IoTrashOutline } from "react-icons/io5";


const productInCart = [
    initialData.products[0],
    // initialData.products[1],
    // initialData.products[2],
]

export default function () {


    //si el carrito esta vacio usar el redirect
    //redirect('/empty/');


    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

            <div className="flex flex-col w-[1000px] bg-gray-200 p-5 rounded-xl">
                <Title title="Carrito" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/* Cart */}

                    <div className="flex flex-col mt-5">
                        <span className="text-xl ">
                            Agregar mas Items {' '}
                            <Link href='/' className="underline mb-5">
                                 Continua comprando
                            </Link>
                        </span>
                    {/* Items */}

                    {
                        productInCart.map(p => (
                            <div key={p.slug} className="flex mt-5">
                                <Image
                                    src={`/products/${p.images[0]}`}
                                    width={150}
                                    height={100}
                                    alt={p.title}
                                    className="mr-5 rounded">

                                </Image>
                                <div>
                                    <p>{p.title}</p>
                                    <p>{p.price}</p>
                                    <QuantitySelector
                                        quantity={3} />

                                    <button
                                        className="group relative inline-flex items-center overflow-hidden rounded bg-red-500 px-8 py-3 text-white focus:outline-none active:bg-red-500"
                                        
                                        >
                                        <span className="absolute -end-full transition-all group-hover:end-4">
                                            <IoTrashOutline />
                                        </span>

                                        <span className="text-sm font-medium transition-all group-hover:me-4"> Remover </span>
                                    </button>
                                </div>

                            </div>
                        ))
                    }

                    </div>

                    {/* Checkout - resumen orden */}

                    <div className="bg-white rounded-xl shadow-xl p-7">
                        <h2 className="text-2xl mb-2">Resumen compra</h2>

                        <div className="grid grid-cols-2">
                            <span>No Producto</span>
                            <span className="text-right"> 3 articulos</span>
                            
                            <span>Sub Total</span>
                            <span className="text-right"> $ 100</span>
                            
                            <span>+IVA</span>
                            <span className="text-right"> $ 119</span>
                            
                            <span className="mt-5 text-2xl">Total</span>
                            <span className="mt-5 text-2xl text-right"> $ 119</span>
                        </div>

                        <div className="mt-4 w-full">
                            <Link 
                            className="flex justify-center rounded bg-pink-400 hover:bg-pink-500  transition-all text-white text-lg"
                            href='/checkout/address'>
                            CheckOut
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}