import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { IoRemoveCircleOutline, IoTrashOutline } from "react-icons/io5";


const productInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

export default function () {
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

            <div className="flex flex-col w-[1000px] bg-gray-200 p-5 rounded-xl">
                <Title title="Verificar orden" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/* Cart */}

                    <div className="flex flex-col mt-5">
                        <span className="text-xl ">
                            Ajustar elementos {' '}
                            <Link href='/cart' className="underline mb-5">
                                 Editar carrito
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
                                    <p>${p.price} x 3</p>
                                    <p className="font-bold">Subtotal: ${p.price * 3}</p>

                                </div>

                            </div>
                        ))
                    }

                    </div>

                    {/* Checkout - resumen orden */}

                    <div className="bg-white rounded-xl shadow-xl p-7">

                        <h2 className="text-2xl mb-2">Direccion entrega</h2>
                        <div className="mb-10">
                            <p className="text-xl">Nombre</p>
                            <p>Direccion</p>
                            <p>Region</p>
                            <p>Numero</p>
                            <p>Correo</p>
                            <p>Codigo postal</p>
                        </div>
                        {/* Divider */}

                        <div className="w-full h-0.5 rounded bg-gray-200 mb-10"/>
                        
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
                            href='/orders/123'>
                            Pagar
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}