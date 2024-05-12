import React from 'react'

interface Props {
    params: { slug: string[] }
}

const ProductPage = ({ params: { slug } }: Props) => {
    return (
        <div>
            <h1>Product page with params - {slug}</h1>
        </div>
    )
}

export default ProductPage
