import React, { FunctionComponent } from 'react';
import ShopItem from './ShopItem'
import { SectionWrapper, NoProducts } from '../common'

import { ProductType } from '../../types'

type ShopProps = {
  products: ProductType[]
}

const Shop: FunctionComponent<ShopProps> = ({ products }) => {
  const handleAddToCart = (id: number) => console.log('Adding: ', id)
  return (
    <SectionWrapper title="Shop">
      {products.length === 0 ? (
        <NoProducts />
      ) : (
        products.map(p => <ShopItem product={p} handleAddToCart={() => handleAddToCart(p.id)} />)
      )}
    </SectionWrapper>
  )
}

export default Shop
