export const revalidate = 0;

import { getPaginatedUsers } from '@/actions';
import { Title } from '@/components';

import { redirect } from 'next/navigation';
import { UsersTable } from './ui/UsersTable';

export default async function OrdersPage() {

    const { ok, users = [] } = await getPaginatedUsers();

    if (!ok) {
        redirect('/auth/login')
    }


    return (
        <>
            <Title title="Mantenedor de usuarios" />            
                <UsersTable users={ users } />
        </>
    );
}