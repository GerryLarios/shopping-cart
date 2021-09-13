import React, { FunctionComponent } from 'react';
import CartItem from './CartItem'
import { CartStatusMachine } from '../Cart/Status'

type CartItemListProps = {
  cartStatusMachine: CartStatusMachine
}

const CartItemList: FunctionComponent<CartItemListProps> = ({ cartStatusMachine }) => (
  <div className="cart-items">
    <h4>Items</h4>
    <div>
      {
        cartStatusMachine.state.products.map(
          p => <CartItem product={p} handleRemove={cartStatusMachine.removeProduct} handleVolume={cartStatusMachine.setProductVolume} />
        )
      }
    </div>
    <button onClick={cartStatusMachine.order}>
      Check order ({cartStatusMachine.state.products.length} products)
    </button>
  </div>
)


export default CartItemList
