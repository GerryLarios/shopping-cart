import React, { FunctionComponent } from 'react';

import { CartStatusMachine } from '../Cart/Status'

type OrderSectionProps = {
  cartStatusMachine: CartStatusMachine
}

const OrderSection: FunctionComponent<OrderSectionProps> = ({ cartStatusMachine }) => (
  <div className="order-section">
    <h4>Your order</h4>
    <div>
      <h5>Payment information</h5>
      <p>Products: &#36;{cartStatusMachine.state.productsPrice}</p>
      <p>Shipping: &#36;{cartStatusMachine.state.shippingPrice}</p>
      {cartStatusMachine.state.user.isPremium && (<p>Premium user!</p>)}
      {cartStatusMachine.state.user.isInternationalAddress && (<p>International Shipping</p>)}
      <p>Total: &#36;{cartStatusMachine.state.totalPrice}</p>
      <p>
        I accept this charge to my bank account,
        where the institution uses my money to trade at binary options in eToro.
      </p>
      <p>User account: &#36;{cartStatusMachine.state.user.balance}</p>
    </div>
    <button onClick={cartStatusMachine.payment}>
      Buy
    </button>
  </div>
)


export default OrderSection
