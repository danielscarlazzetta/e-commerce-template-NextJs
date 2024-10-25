'use client'

import type { User } from "@/interface";

interface Props {
    users: User[];
}

export const UsersTable = ({ users }: Props) => {

    return (
        <>
            <div className="mb-10">
                <table className="min-w-full">
                    <thead className="bg-gray-200 border-b">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Email
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Nombre completo
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Rol
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((users) => (
                            <tr
                                key={users.id}
                                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {users.email}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {users.name}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <select
                                        value={ users.role }
                                        onChange={e => console.log( e.target.value)}
                                        className="text-sm text-pink-500 w-full p-2 bg-transparent font-medium"
                                    >
                                        <option value="admin">Administrador</option>
                                        <option value="user">Usuario</option>
                                        <option value="seller">Vendedor</option>

                                    </select>
                                </td>





                            </tr>

                        ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}