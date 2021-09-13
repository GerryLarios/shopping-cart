import StatusInterface from './StatusInterface'
import CartStatusMachine from './CartStatusMachine'

class SelectProductStatus implements StatusInterface {
  machine: CartStatusMachine

  constructor(machine: CartStatusMachine) {
    this.machine = machine
  }

  handle = () => {
    const totalPrice = this.machine.state.products.reduce((acc, p) => {
      if (p.category === 'clothes') {
        return acc + this.calculateDiscount(p.price, p.volume, 10)
      }

      if (p.category === 'technology') {
        return acc + this.calculateDiscount(p.price, p.volume, 5)
      }

      return acc + (p.price * p.volume)
    }, 0)
    this.machine.setStateMachineProps({ totalPrice, productsSelectionMade: false })
  }

  private calculateDiscount = (price: number, volume: number, discount: number) => {
    const totalPriceVolume = price * volume
    return (totalPriceVolume - (totalPriceVolume * (discount / 100)))
  }
}

export default SelectProductStatus
