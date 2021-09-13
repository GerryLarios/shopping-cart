import StatusInterface from './StatusInterface'
import CartStatusMachine from './CartStatusMachine'
import {
  FREE_SHIPPING_PRICE_REACH,
  INTERNATIONAL_SHIPPING_PRICE,
  NORMAL_SHIPPING_PRICE
} from '../../../constants'

class OrderStatus implements StatusInterface {
  machine: CartStatusMachine

  constructor(machine: CartStatusMachine) {
    this.machine = machine
  }

  handle = () => {
    const shippingPrice = this.calculateShippingPrice()
    this.machine.setStateMachineProps({
      totalPrice: this.machine.state.totalPrice + shippingPrice,
      productsSelectionMade: true,
      shippingPrice
    })
  }

  calculateShippingPrice = (): number => {
    const { totalPrice } = this.machine.state
    const { isPremium, isInternationalAddress } = this.machine.state.user
    const isFreeShipping = totalPrice >= FREE_SHIPPING_PRICE_REACH  && !isInternationalAddress
    if (isPremium || isFreeShipping) {
      return 0
    }
    return isInternationalAddress ? INTERNATIONAL_SHIPPING_PRICE : NORMAL_SHIPPING_PRICE
  }
}

export default OrderStatus
