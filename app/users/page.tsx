import React from 'react'
import UsersTable from './UsersTable'

interface User {
    id: number
    name: string
    email: string
}

interface Props {
    searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {

    // console.log(sortOrder)
    return (
        <div>
            <h1>Users Page</h1>
            <UsersTable sortOrder={sortOrder} />
        </div>
    )
}

export default UsersPage
