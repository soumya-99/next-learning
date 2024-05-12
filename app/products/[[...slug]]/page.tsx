import React from 'react'

interface Props {
    params: { slug: string[] }
    searchParams: { sortOrder: string }
}

const ProductPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
    return (
        <div>
            <h1>Product page with params - {slug} - Search Params - {sortOrder}</h1>
        </div>
    )
}

export default ProductPage
