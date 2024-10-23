export const revalidate = 0;

import { getPaginatedOrders } from '@/actions';
import { Title } from '@/components';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import { IoCardOutline } from 'react-icons/io5';

export default async function OrdersPage() {

    const { ok, orders = [] } = await getPaginatedOrders();

    if (!ok) {
        redirect('/auth/login')
    }




    return (
        <>
            <Title title="Todas las ordenes" />

            <div className="mb-10">
                <table className="min-w-full">
                    <thead className="bg-gray-200 border-b">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                #ID
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Nombre completo
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Region
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Comuna
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Direccion
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Estado
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Opciones
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Enviado?
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {orders.map((order) => (
                            <tr
                                key={order.id}
                                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {order.id.split("-").at(-1)}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.OrderAddress?.firstName} {order.OrderAddress?.lastName}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.OrderAddress?.region}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.OrderAddress?.comuna}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.OrderAddress?.address}
                                </td>

                                <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {
                                        order.isPaid ? (
                                            <><IoCardOutline className="text-green-800" />
                                                <span className='mx-2 text-green-800'>Pagada</span>
                                            </>
                                        ) : (
                                            <>
                                                <IoCardOutline className="text-red-800" />
                                                <span className='mx-2 text-red-800'>No Pagada</span>
                                            </>
                                        )
                                    }


                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 ">
                                    <Link href={`/orders/${order.id}`} className="hover:underline">
                                        Ver orden
                                    </Link>
                                </td>

                                <td className="text-sm text-gray-900 font-light px-6 ">

                                <label
                                            className="transition-all relative flex cursor-pointer items-center rounded-full p-3"
                                            htmlFor="checkbox"
                                        >
                                            <input
                                                type="checkbox"
                                                className="border-pink-700 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                                id="checkbox"
                                            />
                                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3.5 w-3.5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeWidth="1"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </label>






                                </td>



                            </tr>

                        ))
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
}