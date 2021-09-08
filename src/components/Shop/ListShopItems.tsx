import React, { FunctionComponent, useState, useEffect } from 'react';
import ShopItem from './ShopItem'
import { NoProducts, Loading } from '../common'

import { ProductType } from '../../types'
import { fetchProducts } from '../../providers'


const ListShopItems: FunctionComponent = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<ProductType[]>([])

  const fetchData = async () => {
    const result = await fetchProducts()
    setProducts(result)
    setLoading(false)
  }

  useEffect(() => {
    if (loading) {
      fetchData()
    }
  }, [loading])

  if (loading) {
    return <Loading />
  }

  if (!loading && products.length === 0) {
    return <NoProducts />
  }

  const handleAddToCart = (id: number) => console.log('Adding: ', id)
  
  return (
    <div>
      {products.map(p => <ShopItem product={p} handleAddToCart={() => handleAddToCart(p.id)} />)}
    </div>
  );
}

export default ListShopItems
