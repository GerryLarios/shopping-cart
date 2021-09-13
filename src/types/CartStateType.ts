import CartItemProductType from './CartItemProductType'
import UserType from './UserType'

type CartStateType = {
  productsPrice: number
  shippingPrice: number
  totalPrice: number
  productsSelectionMade: boolean
  user: UserType
  products: CartItemProductType[]
}

export default CartStateType
