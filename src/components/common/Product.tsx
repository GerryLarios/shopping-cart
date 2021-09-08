import React, { FunctionComponent } from 'react'
import { ProductType } from '../../types'

const Product: FunctionComponent<ProductType> = ({ title, price, category, image }) => (
  <div className="product">
    <img src={image} alt={title} />
    <p className="text-align-center">{title}</p>
    <div className="space-between">
      <p>&#36;{price}</p>
      <p>{category.toUpperCase()}</p>
    </div>
  </div>
)


export default Product
