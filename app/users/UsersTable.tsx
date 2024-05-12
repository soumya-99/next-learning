import React from 'react'

interface User {
    id: number
    name: string
    email: string
}

const UsersTable = async () => {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            // next: {
            //     revalidate: 10
            // }
            cache: "no-store"
        }
    )
    const users: User[] = await res.json()

    return (
        <table className="table table-bordered">
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>

            <tbody>
                {users?.map(user =>
                    <tr key={user.id}><td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default UsersTable
