import React from 'react';

import Layout from './components/Layout'

import { ListShopItems } from './components/Shop'
import { ListCartItems } from './components/Cart'

const App = () => {

  return (
    <Layout>
      <ListCartItems products={[]} />
      <ListShopItems />
    </Layout>
  )
}

export default App;
