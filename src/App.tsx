import React, { useState } from 'react'
import Layout from './components/Layout'
import Cart from './components/Cart'
import Shop from './components/Shop'

import { CartStateType } from './types'
import { fetchProducts } from './providers'
import { DEFAULT_STATE } from './constants'

import CartStatusMachine from './components/Cart/Status/CartStatusMachine'

const App = () => {
  const [state, setState] = useState<CartStateType>(DEFAULT_STATE)
  const cartMachineStatus = new CartStatusMachine(state, setState)
  return (
    <Layout>
      {cartMachineStatus.state.products.length !== 0 && (
        <Cart cartStatusMachine={cartMachineStatus} />
      )}
      <Shop
        products={fetchProducts()}
        addProductToCart={cartMachineStatus.addProduct}
        cartItemProducts={cartMachineStatus.state.products}
      />
    </Layout>
  )
}

export default App
