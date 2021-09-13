import StatusInterface from './StatusInterface'

import SelectProductStatus from './SelectProductStatus'
import OrderStatus from './OrderStatus'
import PaymentStatus from './PaymentStatus'

import { CartStateType, ProductType, CartItemProductType } from '../../../types'

class CartStatusMachine {
  status: StatusInterface
  state: CartStateType
  setState: (state: CartStateType) => void

  constructor(state: CartStateType, setState: (state: CartStateType) => void) {
    this.status = new SelectProductStatus(this)
    this.state = { ...state }
    this.setState = setState
  }

  addProduct = (product: ProductType) => {
    const products = [{ ...product, volume: 1 }, ...this.state.products]
    const props = { productsPrice: this.calculateProductsPrice(products), products }
    this.setStateMachineProps(props)
    this.status.handle()
    this.applyChanges()
  }

  removeProduct = (product: ProductType) => {
    const products = this.state.products.filter(p => p.id !== product.id)
    const props = { productsPrice: this.calculateProductsPrice(products), products }
    this.setStateMachineProps(props)
    this.status.handle()
    this.applyChanges()
  }

  setProductVolume = (product: ProductType, volume: number) => {
    if (volume === 0) {
      this.removeProduct(product)
    } else {
      const products = this.state.products.map(p => p.id !== product.id ? p : ({ ...p, volume }))
      const props = { productsPrice: this.calculateProductsPrice(products), products }
      this.setStateMachineProps(props)
      this.status.handle()
      this.applyChanges()
    }
  }

  order = () => {
    this.status = new OrderStatus(this)
    this.status.handle()
    this.applyChanges()
  }

  payment = () => {
    this.status = new PaymentStatus(this)
    this.status.handle()
    this.applyChanges()
  }

  setStateMachineProps = (props: Partial<CartStateType>) => {
    this.state = { ...this.state, ...props }
  }

  private calculateProductsPrice = (products: CartItemProductType[]) => {
    const total = products.reduce((acc, p) => p.price * p.volume , 0)
    return total
  }

  private applyChanges = () => {
    this.setState(this.state)
  }
}

export default CartStatusMachine
