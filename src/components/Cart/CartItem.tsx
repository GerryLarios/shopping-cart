import React, { FunctionComponent } from 'react'
import Product from '../common/Product'

import { ProductType } from '../../types'

type CartItemProps = {
  product: ProductType
  handleVolume: (productId: number, num: number) => void
  handleRemove: (productId: number) => void
}

const CartItem: FunctionComponent<CartItemProps> = ({ product, handleVolume, handleRemove }) => (
  <div className="cart-item">
    <Product {...product} />
    <div>
      <button onClick={() => handleVolume(product.id, 1)}>
        &plus;
      </button>
      <button onClick={() => handleVolume(product.id, -1)}>
        &minus;
      </button>
    </div>
    <div>
      <button onClick={() => handleRemove(product.id)}>
        Remove
      </button>
    </div>
  </div>
)

export default CartItem
