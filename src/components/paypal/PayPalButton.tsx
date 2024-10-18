'use client';


import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { CreateOrderData, CreateOrderActions, OnApproveActions, OnApproveData } from '@paypal/paypal-js';

interface Props {
    orderId: string;
    amount: number;
}

export const PayPalButton = ({orderId, amount} : Props) => {

    const [{ isPending }] = usePayPalScriptReducer();

    const roundedAmount = (Math.round(amount * 100)) / 100;
    // const roundedAmount = amount.toFixed(2).toString();

    if( isPending){
        return (
            <div className='animate-pulse'>
                <div className='h-10 bg-gray-400 rounded-md'></div>
                <div className='h-10 bg-gray-400 rounded-md mt-4'></div>
            </div>
        )
    }



    const createOrder = async (/*data: CreateOrderData*/ actions: CreateOrderActions): Promise<string> =>{

         const transactionId = await actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    //invoice_id: 'order_id',
                    amount: {
                        value: `${ roundedAmount }`,
                        currency_code: 'USD',
                    },
                }
            ]
         })

        
        //  const { ok } = await setTransactionId( orderId, transactionId );
        //  if ( !ok ) {
        //    throw new Error('No se pudo actualizar la orden');
        //  }
     
         return transactionId;


    }

    return(
        <PayPalButtons 
        // createOrder={ createOrder }
        // onApprove={}
        />
    )
} 