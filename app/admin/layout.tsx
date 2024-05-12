import React from 'react'

interface Props {
    children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
    return (
        <div className='flex'>
            <aside className='p-5 mr-5 bg-slate-500'>Sidebar</aside>
            {children}
        </div>
    )
}

export default AdminLayout
