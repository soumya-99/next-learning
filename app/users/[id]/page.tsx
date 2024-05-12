import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: number }
}

const UserDetails = ({ params: { id } }: Props) => {
    if (id > 10) notFound()

    return (
        <div>
            <h1>User Details Page - User {id}</h1>
        </div>
    )
}

export default UserDetails
