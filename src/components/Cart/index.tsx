import React, { FunctionComponent } from 'react';
import CartItem from './CartItem'
import { SectionWrapper, NoProducts } from '../common'

import { ProductType } from '../../types'

type CartProps = {
  products: ProductType[]
}

const Cart: FunctionComponent<CartProps> = ({ products }) => {
  const handleVolume = (id: number, volume: number) => console.log('Add: ', id)
  const handleRemove = (id: number) => console.log('Remove: ', id)

  return (
    <SectionWrapper title="Cart">
      {products.length === 0 ? (
        <NoProducts />
      ) : (
        products.map(p => <CartItem product={p} handleVolume={handleVolume} handleRemove={handleRemove} />)
      )}
    </SectionWrapper>
  )
}

export default Cart
