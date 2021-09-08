import React, { useState } from 'react'

import Layout from './components/Layout'
import Cart from './components/Cart'
import Shop from './components/Shop'

import { ProductType } from './types'
import { fetchProducts } from './providers'

const App = () => {
  const [cartItems, setCartItems] = useState<ProductType[]>([])
  const products = fetchProducts()

  return (
    <Layout>
      <Cart products={cartItems} />
      <Shop products={products} />
    </Layout>
  )
}

export default App
