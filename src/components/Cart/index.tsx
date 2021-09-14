import React, { FunctionComponent } from 'react';

import CartItemList from './CartItemList'
import OrderSection from './OrderSection'

import { SectionWrapper, NoProducts } from '../common'

import { CartStatusMachine } from '../Cart/Status'

type CartProps = {
  cartStatusMachine: CartStatusMachine
}

const Cart: FunctionComponent<CartProps> = ({ cartStatusMachine }) => {
  const { products, productsSelectionMade } = cartStatusMachine.state
  return (
    <SectionWrapper title={productsSelectionMade ? 'Order information' : 'Cart Items'}>
      {products.length === 0 ? (
        <NoProducts />
      ) : (
        <>
          <div>
            {productsSelectionMade ? (
              <OrderSection cartStatusMachine={cartStatusMachine} />
            ) : (
              <CartItemList cartStatusMachine={cartStatusMachine} />
            )}
          </div>
        </>
      )}
    </SectionWrapper>
  )
}


export default Cart
