import React, { useState } from 'react'
import Layout from './components/Layout'
import Cart from './components/Cart'
import Shop from './components/Shop'

import { CartStateType } from './types'
import { fetchProducts } from './providers'

import CartStatusMachine from './components/Cart/Status/CartStatusMachine'

const DEFAULT_STATE = {
  total: 0,
  products: [],
  user: {
    isInternationalAddress: false,
    isPremium: false
  }
}

const App = () => {
  const [state, setState] = useState<CartStateType>(DEFAULT_STATE)
  const products = fetchProducts()
  const cartMachineStatus = new CartStatusMachine(state, setState)

  return (
    <Layout>
      <Cart cartStatusMachine={cartMachineStatus} />
      <Shop
        products={products}
        addProductToCart={cartMachineStatus.addProduct}
        cartItemProducts={cartMachineStatus.state.products}
      />
    </Layout>
  )
}

export default App
