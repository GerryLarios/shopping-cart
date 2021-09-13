import React, { FunctionComponent } from 'react';
import ShopItem from './ShopItem'
import { SectionWrapper, NoProducts } from '../common'

import { ProductType, CartItemProductType } from '../../types'

type ShopProps = {
  products: ProductType[]
  cartItemProducts: CartItemProductType[]
  addProductToCart: (product: ProductType) => void
}

const Shop: FunctionComponent<ShopProps> = ({ products, cartItemProducts, addProductToCart }) => (
  <SectionWrapper title="Shop">
    {products.length === 0 ? (
      <NoProducts />
    ) : (
      <div className="shop-items">
        {products.map(p => 
          <ShopItem
            product={p}
            addedToCart={cartItemProducts.some(cp => cp.id === p.id)}
            handleAddToCart={() => addProductToCart(p)}
          />
        )}
      </div>
    )}
  </SectionWrapper>
)

export default Shop
