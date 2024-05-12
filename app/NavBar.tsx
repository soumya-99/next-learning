import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <nav className='flex p-5 bg-slate-300 text-slate-800'>
            <Link href="/" className='mr-5'>@thecolorsofvoid</Link>
            <Link href="/users">Users</Link>
        </nav>
    )
}

export default NavBar
