import React from 'react'

interface Props {
    params: { id: number }
}

const UserDetails = ({ params: { id } }: Props) => {
    return (
        <div>
            <h1>User Details Page - User {id}</h1>
        </div>
    )
}

export default UserDetails
