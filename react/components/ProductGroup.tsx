import React from 'react'

type Props = {
  products: [{}]
}

const ProductGroup = ({products}:Props) => {

  console.log("mis productos en product group son", products);

  return (
    <div>
      Mi listado de productos
    </div>
  )
}

export default ProductGroup
