import React, { FunctionComponent } from 'react'
import Product from '../common/Product'
import { CartItemProductType } from '../../types'

type CartItemProps = {
  product: CartItemProductType
  handleVolume: (product: CartItemProductType, volume: number) => void
  handleRemove: (product: CartItemProductType) => void
}

const CartItem: FunctionComponent<CartItemProps> = ({ product, handleVolume, handleRemove }) => (
  <div className="cart-item">
    <Product {...product} />
    <div className="controls">
      <div className="volume-controls">
        <button onClick={() => handleVolume(product, product.volume + 1)}>
          &#43;
        </button>
        <p>{product.volume}</p>
        <button onClick={() => handleVolume(product, product.volume - 1)}>
          &minus;
        </button>
      </div>
      <div>
        <button className="remove-cart-item" onClick={() => handleRemove(product)}>
          Remove
        </button>
      </div>
    </div>
  </div>
)

export default CartItem
