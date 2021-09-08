import React, { FunctionComponent, useState } from 'react'
import CartItem from './CartItem'
import { NoProducts } from '../common'

import { ProductType } from '../../types'

type ListCartItemsProps = {
  products: ProductType[]
}

const ListCartItems: FunctionComponent<ListCartItemsProps> = ({ products }) => {
  if (products.length === 0) {
    return <NoProducts />
  }

  const handleVolume = (num: number, productId: number) => console.log(`product ${productId} : ${num}`)

  const handleRemove = (productId: number) => console.log('removing', productId)

  return (
    <div>
      <h2>Cart</h2>
      {products.map(p => <CartItem product={p} handleVolume={handleVolume} handleRemove={handleRemove} />)}
    </div>
  )
}

export default ListCartItems
