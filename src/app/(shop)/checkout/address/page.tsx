import { Title } from '@/components';
import Link from 'next/link';
import { IoWalletOutline } from 'react-icons/io5';

export default function AddressPage() {
    return (
        <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">



            <div className="w-full  xl:w-[800px] flex flex-col justify-center text-left">

                <Title title="Dirección" subtitle="Dirección de entrega" />

                <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">


                    <div className="flex flex-col mb-2">
                        <span>Nombres</span>
                        <input
                            type="text"
                            className="p-2 border rounded-md bg-gray-200"
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>Apellidos</span>
                        <input
                            type="text"
                            className="p-2 border rounded-md bg-gray-200"
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>Dirección</span>
                        <input
                            type="text"
                            className="p-2 border rounded-md bg-gray-200"
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>Dirección 2 (opcional)</span>
                        <input
                            type="text"
                            className="p-2 border rounded-md bg-gray-200"
                        />
                    </div>


                    <div className="flex flex-col mb-2">
                        <span>Código postal</span>
                        <input
                            type="text"
                            className="p-2 border rounded-md bg-gray-200"
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>Ciudad</span>
                        <input
                            type="text"
                            className="p-2 border rounded-md bg-gray-200"
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>País</span>
                        <select
                            className="p-2 border rounded-md bg-gray-200"
                        >
                            <option value="">[ Seleccione ]</option>
                            <option value="CRI">Costa Rica</option>
                        </select>
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>Teléfono</span>
                        <input
                            type="text"
                            className="p-2 border rounded-md bg-gray-200"
                        />
                    </div>


                    <div className="flex flex-col mb-2 sm:mt-10">
                        <Link
                            href='/checkout'
                            className="group relative inline-flex items-center overflow-hidden rounded  bg-pink-400 px-8 py-3 text-white focus:outline-none active:bg-pink-600">
                            <span className="absolute -end-full transition-all group-hover:end-4">
                                <IoWalletOutline />
                            </span>

                            Siguiente
                        </Link>
                    </div>


                </div>

            </div>




        </div>
    );
}