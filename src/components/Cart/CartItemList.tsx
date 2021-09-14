import React, { FunctionComponent } from 'react';
import CartItem from './CartItem'
import { CartStatusMachine } from '../Cart/Status'

type CartItemListProps = {
  cartStatusMachine: CartStatusMachine
}

const CartItemList: FunctionComponent<CartItemListProps> = ({ cartStatusMachine }) => {
  const { products, totalPrice } = cartStatusMachine.state
  return (
    <>
      <div className="cart-items">
        {products.map(p => {
          return (
            <CartItem
              product={p}
              handleRemove={cartStatusMachine.removeProduct}
              handleVolume={cartStatusMachine.setProductVolume}
            />
          )
        })}
      </div>
      <button className="btn check-order" onClick={cartStatusMachine.order}>
        Check order (&#36;{totalPrice.toFixed(2)})
      </button>
    </>
  )
}

export default CartItemList
