import React from 'react'
import UsersTable from './UsersTable'
import Link from 'next/link'

interface Props {
    searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {

    // console.log(sortOrder)
    return (
        <div>
            <h1>Users Page</h1>
            <Link className='btn' href="/users/new">New User</Link>
            <UsersTable sortOrder={sortOrder} />
        </div>
    )
}

export default UsersPage
