import React, { FunctionComponent } from 'react';
import CartItem from './CartItem'
import { SectionWrapper, NoProducts } from '../common'

import { CartStatusMachine } from '../Cart/Status'

type CartProps = {
  cartStatusMachine: CartStatusMachine
}

const Cart: FunctionComponent<CartProps> = ({ cartStatusMachine }) => {
  return (
    <SectionWrapper title="Cart">
      {cartStatusMachine.state.products.length === 0 ? (
        <NoProducts />
      ) : (
        <>
          <h3>Total: &#36;{cartStatusMachine.state.total}</h3>
          <div className="cart-items">
            {cartStatusMachine.state.products.map(p =>
              <CartItem
                product={p}
                handleRemove={cartStatusMachine.removeProduct}
                handleVolume={cartStatusMachine.setProductVolume}
              />
            )}
          </div>
        </>
      )}
    </SectionWrapper>
  )
}

export default Cart
