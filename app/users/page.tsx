import React from 'react'
import UsersTable from './UsersTable'

interface User {
    id: number
    name: string
    email: string
}

const UsersPage = async () => {

    return (
        <div>
            <h1>Users Page</h1>
            <UsersTable />
        </div>
    )
}

export default UsersPage
