import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";


const productInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]


interface Props {
    params: {
        id: string;
    }
}

export default function OrdersByIdPage({ params }: Props) {

    const { id } = params;

    //verificar
    //redirect


    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

            <div className="flex flex-col w-[1000px] bg-gray-200 p-5 rounded-xl">
                <Title title={` Orden #${id}`} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/* Cart */}

                    <div className="flex flex-col mt-5">

                        <div className={
                            clsx(
                                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                {
                                    "bg-red-500": false,
                                    "bg-green-700": true,
                                }
                            )
                        }>
                            <IoCardOutline size={30} />
                            {/* <span className="mx-2">Pendiente de pago</span> */}
                            <span className="mx-2">Pago exitoso!</span>
                        </div>
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

                        <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

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
                            <div className={
                                clsx(
                                    "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                    {
                                        "bg-red-500": false,
                                        "bg-green-700": true,
                                    }
                                )
                            }>
                                <IoCardOutline size={30} />
                                {/* <span className="mx-2">Pendiente de pago</span> */}
                                <span className="mx-2">Pago exitoso!</span>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}