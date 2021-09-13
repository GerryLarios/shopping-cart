import React, { FunctionComponent } from 'react';

import CartItemList from './CartItemList'
import OrderSection from './OrderSection'

import { SectionWrapper, NoProducts } from '../common'

import { CartStatusMachine } from '../Cart/Status'

type CartProps = {
  cartStatusMachine: CartStatusMachine
}

const Cart: FunctionComponent<CartProps> = ({ cartStatusMachine }) => (
  <SectionWrapper title="Cart">
    {cartStatusMachine.state.products.length === 0 ? (
      <NoProducts />
    ) : (
      <>
        <h3>Total: &#36;{cartStatusMachine.state.totalPrice}</h3>
        <div>
          {cartStatusMachine.state.productsSelectionMade ? (
            <OrderSection cartStatusMachine={cartStatusMachine} />
          ) : (
            <CartItemList cartStatusMachine={cartStatusMachine} />
          )}
        </div>
      </>
    )}
  </SectionWrapper>
)


export default Cart
