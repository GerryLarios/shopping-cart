import StatusInterface from './StatusInterface'
import DiscountStatus from './DiscountStatus'
import { CartStateType, ProductType, CartItemProductType } from '../../../types'

class CartStatusMachine {
  status: StatusInterface
  state: CartStateType
  setState: (state: CartStateType) => void

  constructor(state: CartStateType, setState: (state: CartStateType) => void) {
    this.status = new DiscountStatus(this)
    this.state = { ...state }
    this.setState = setState
  }

  addProduct = (product: ProductType) => {
    const products = [{ ...product, volume: 1 }, ...this.state.products]
    const total = this.calculateTotalPriceProduct(products)
    this.state = { ...this.state, products, total }
    this.status.handle()
    this.applyChanges()
  }

  removeProduct = (product: ProductType) => {
    const products = this.state.products.filter(p => p.id !== product.id)
    const total = this.calculateTotalPriceProduct(products)
    this.state = { ...this.state, products, total }
    this.status.handle()
    this.applyChanges()
  }

  setProductVolume = (product: ProductType, volume: number) => {
    if (volume === 0) {
      this.removeProduct(product)
    } else {
      const products = this.state.products.map(p => {
        if (p.id !== product.id) {
          return p
        }
        return { ...p, volume }
      })
      const total = this.calculateTotalPriceProduct(products)
      this.state = { ...this.state, products, total }
      this.status.handle()
      this.applyChanges()
    }
  }

  private calculateTotalPriceProduct = (products: CartItemProductType[]) => {
    const total = products.reduce((acc, p) => p.price * p.volume , 0)
    return total
  }

  private applyChanges = () => {
    this.setState(this.state)
  }
}

export default CartStatusMachine
