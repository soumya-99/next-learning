import React from 'react'

interface Props {
    params: { id: number, photoId: number }
}

const UserPhoto = ({ params: { id, photoId } }: Props) => {
    return (
        <div>
            <h1>User Id: {id} and Photo Id: {photoId}</h1>
        </div>
    )
}

export default UserPhoto
