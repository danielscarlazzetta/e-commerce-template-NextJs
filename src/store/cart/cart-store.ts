import type { CartProduct } from "@/interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";



interface State {
    cart: CartProduct[];


    getTotalItems: () => number;

    addProductToCart: (product: CartProduct) => void;
    //updateProductQuantity
    //removeProduct
}

export const useCartStore = create<State>()(

    // persistencia en el carro de compras
    persist(
        (set, get) => ({

            cart: [],

            //metodos

            getTotalItems: () => {
                const { cart } = get();
                return cart.reduce( ( total , item ) => total + item.quantity, 0 );
            },


            addProductToCart: (product: CartProduct) => {
                const { cart } = get();

                // 1. revisar si existe el producto
                const productInCart = cart.some(
                    (item) => (item.id === product.id && item.size === product.size)
                );

                if (!productInCart) {
                    set({ cart: [...cart, product] })
                    return
                }

                // 2. el producto existe por talla, ahora se incrementa
                const updatedCartProduct = cart.map((item) => {
                    if (item.id === product.id && item.size === product.size) {
                        return { ...item, quantity: item.quantity + product.quantity }
                    }

                    return item;
                });

                set({ cart: updatedCartProduct })
            }

        })
        ,

        { 
            name: "shopping-cart",
            // skipHydration: true,
        },
    )
)