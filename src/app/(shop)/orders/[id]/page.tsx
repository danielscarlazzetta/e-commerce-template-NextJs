import { getOrderById } from "@/actions";
import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import { currencyFormat } from "@/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
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

export default async function OrdersByIdPage({ params }: Props) {

    const { id } = params;

    //todo llamar server action

    const { ok, order } = await getOrderById(id);

    // console.log(JSON.stringify(order));
    // console.log(order);
    if (!ok) {
        redirect('/')
    }


    const address = order!.OrderAddress;

    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

            <div className="flex flex-col w-[1000px] bg-gray-200 p-5 rounded-xl">
                <Title title={` Orden #${id.split('-').at(-1)}`} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/* Cart */}

                    <div className="flex flex-col mt-5">

                        <div className={
                            clsx(
                                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                {
                                    "bg-red-500": !order!.isPaid,
                                    "bg-green-700": order!.isPaid,
                                }
                            )
                        }>
                            <IoCardOutline size={30} />
                            {/* <span className="mx-2">Pendiente de pago</span> */}
                            <span className="mx-2">
                                {
                                    order?.isPaid ? 'Pago exitoso!' : 'Error con la compra'
                                }
                            </span>
                        </div>
                        {/* Items */}

                        {
                            order!.OrderItem.map(item => (

                                <div key={item.product.slug + ' - ' + item.size} className="flex mt-5">
                                    <Image
                                        src={`/products/${item.product.ProductImage[0].url}`}
                                        width={150}
                                        height={100}
                                        alt={item.product.title}
                                        className="mr-5 rounded">

                                    </Image>
                                    <div>
                                        <p>{item.product.title}</p>
                                        <p>${item.price} x {item.quantity}</p>
                                        <p className="font-bold">Subtotal: {currencyFormat(item.price * item.quantity)}</p>

                                    </div>

                                </div>
                            ))
                        }

                    </div>

                    {/* Checkout - resumen orden */}

                    <div className="bg-white rounded-xl shadow-xl p-7">

                        <h2 className="text-2xl mb-2">Direccion entrega</h2>
                        <div className="mb-10">
                            <p className="text-xl">
                                {address!.firstName} {address!.lastName}
                            </p>
                            <p>{address!.address}</p>
                            <p>{address!.address2}</p>
                            <p>{address!.postalCode}</p>
                            <p>
                                {address!.city}, {address!.countryId}
                            </p>
                            <p>{address!.region} - {address!.comuna}</p>
                            <p>{address!.phone}</p>
                        </div>
                        {/* Divider */}

                        <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

                        <h2 className="text-2xl mb-2">Resumen compra</h2>

                        <div className="grid grid-cols-2">
                            <span>No Producto</span>
                            <span className="text-right">{order?.itemsInOrder === 1 ? '1 Articulo ' : `${order?.itemsInOrder} Articulos`}</span>

                            <span>Sub Total</span>
                            <span className="text-right"> {currencyFormat(order!.subTotal)}</span>

                            <span>+IVA</span>
                            <span className="text-right">{currencyFormat(order!.tax)}</span>

                            <span className="mt-5 text-2xl">Total</span>
                            <span className="mt-5 text-2xl text-right">{currencyFormat(order!.total)}</span>
                        </div>

                        <div className="mt-4 w-full">
                            <div className={
                                clsx(
                                    "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                    {
                                        "bg-red-500": !order!.isPaid,
                                        "bg-green-700": order!.isPaid,
                                    }
                                )
                            }>
                                <IoCardOutline size={30} />
                                {/* <span className="mx-2">Pendiente de pago</span> */}
                                <span className="mx-2">
                                    {
                                        order?.isPaid ? 'Pago exitoso!' : 'Error con la compra'
                                    }
                                </span>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}