"use client";
import { useRouter } from 'next/navigation'
import React from 'react'


const CreateNewUser = () => {
    const router = useRouter()
    return (
        <div>
            <button className='btn btn-primary' onClick={() => router.push("/users")}>
                Create User
            </button>
        </div>
    )
}

export default CreateNewUser
