import React, { FunctionComponent } from 'react'
import { Product } from '../common'

import { ProductType } from '../../types'

type ShopItemProps = {
  product: ProductType
  handleAddToCart: () => void
  addedToCart?: boolean
}

const ShopItem: FunctionComponent<ShopItemProps> = ({
  product,
  handleAddToCart,
  addedToCart = false
}) => (
  <div className="shop-item">
    <Product {...product} />
    <div>
      <button disabled={addedToCart} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  </div>
)

export default ShopItem
