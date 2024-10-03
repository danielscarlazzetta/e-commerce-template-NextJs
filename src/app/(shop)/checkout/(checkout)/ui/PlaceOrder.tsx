'use client'

import { useAddressStore, useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { useEffect, useState } from "react";


export const PlaceOrder = () => {


    const [loaded, setLoaded] = useState(false);
    const address = useAddressStore((state) => state.address);

    const { itemsInCart, subsTotal, tax, total } = useCartStore((state) =>
        state.getSumaryInformation()
    );



    useEffect(() => {
        setLoaded(true);
    }, []);


    if (!setLoaded) {
        return 'Caregando....'
    }


    return (
        <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className="text-2xl mb-2">Direccion entrega</h2>
            <div className="mb-10">
                <p className="text-xl">
                    {address.firstName} {address.lastName}
                </p>
                <p>{address.address}</p>
                <p>{address.address2}</p>
                <p>{address.postalCode}</p>
                <p>
                    {address.city}, {address.country}
                </p>
                <p>{address.region} - {address.comuna}</p>
                <p>{address.phone}</p>
            </div>
            {/* Divider */}

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Resumen compra</h2>

            <div className="grid grid-cols-2">
                <span>No. Productos</span>
                <span className="text-right">
                    {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}
                </span>

                <span>Subtotal</span>
                <span className="text-right">{currencyFormat(subsTotal)}</span>

                <span>Impuestos (19%)</span>
                <span className="text-right">{currencyFormat(tax)}</span>

                <span className="mt-5 text-2xl">Total:</span>
                <span className="mt-5 text-2xl text-right">
                    {currencyFormat(total)}
                </span>
            </div>

            <div className="mt-4 w-full">
                <button
                    // href='/orders/123'
                    className="flex justify-center rounded bg-pink-400 hover:bg-pink-500  transition-all text-white text-lg w-full p-2"
                >
                    Colocar orden
                </button>
            </div>
        </div>
    )
}