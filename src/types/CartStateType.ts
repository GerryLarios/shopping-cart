import CartItemProductType from './CartItemProductType'
import UserType from './UserType'

type CartStateType = {
  total: number
  user: UserType
  products: CartItemProductType[]
}

export default CartStateType
