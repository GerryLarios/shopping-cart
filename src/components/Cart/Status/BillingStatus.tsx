import StatusInterface from './StatusInterface'
import CartStatusMachine from './CartStatusMachine'
import {
  FREE_SHIPPING_PRICE_REACH,
  INTERNATIONAL_SHIPPING_PRICE,
  NORMAL_SHIPPING_PRICE
} from '../../../constants'

class BillingStatus implements StatusInterface {
  machine: CartStatusMachine

  constructor(machine: CartStatusMachine) {
    this.machine = machine
  }

  handle = () => {
    const total = this.machine.state.total
    const user =  this.machine.state.user
    this.machine.state = {
      ...this.machine.state,
      total: total + this.calculateShipping(user.isPremium, user.isInternationalAddress, total)
    }
  }

  private calculateShipping = (isPremium: boolean, isInternationalAddress: boolean, total: number): number => {
    const isPriceReached = total >= FREE_SHIPPING_PRICE_REACH
    const isFreeShipping = isPriceReached  && !isInternationalAddress

    if (isPremium || isFreeShipping) {
      return 0
    }

    if (!isPriceReached && isInternationalAddress) {
      return INTERNATIONAL_SHIPPING_PRICE
    }

    return NORMAL_SHIPPING_PRICE
  }
}

export default BillingStatus
