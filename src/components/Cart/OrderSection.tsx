import React, { FunctionComponent } from 'react';

import { CartStatusMachine } from '../Cart/Status'

type OrderSectionProps = {
  cartStatusMachine: CartStatusMachine
}

const OrderSection: FunctionComponent<OrderSectionProps> = ({ cartStatusMachine }) => (
  <div className="order-section">
    <div>
      <div className="order-detail-wrapper">
        <h5>Your order</h5>
        <div className="order-detail">
          <p className="order-detail-name">Products:</p>
          <p>&#36;{cartStatusMachine.state.productsPrice}</p>
        </div>
        <div className="order-detail">
          <p className="order-detail-name">Shipping:</p>
          <p>&#36;{cartStatusMachine.state.shippingPrice}</p>
        </div>
        <div className="order-detail">
          <p className="order-detail-name">Total:</p>
          <p>&#36;{cartStatusMachine.state.totalPrice}</p>
        </div>
      </div>
      <div className="order-detail-wrapper">
        <h5>Payment information</h5>
        <div className="order-detail">
          <p className="order-detail-name">User account:</p>
          <p>&#36;{cartStatusMachine.state.user.balance}</p>
        </div>
        <p className="gray-info">
          I accept this charge to my bank account,
          where the institution uses my money to trade at binary options in eToro.
        </p>
        <div className="order-detail-tags">
          {cartStatusMachine.state.user.isPremium && (<p>Premium user</p>)}
          {cartStatusMachine.state.user.isInternationalAddress && (<p>International Shipping</p>)}
        </div>
      </div>
    </div>
    <button className="btn change-status" onClick={cartStatusMachine.payment}>
      Buy
    </button>
  </div>
)


export default OrderSection
