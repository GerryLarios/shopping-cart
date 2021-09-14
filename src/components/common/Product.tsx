import React, { FunctionComponent } from 'react'
import { ProductType } from '../../types'

const Product: FunctionComponent<ProductType> = ({ title, price, category, image }) => (
  <div className="product">
    <img src={image} alt={title} />
    <div className="product-name">
      <p>{title}</p>
      <p>&#36;{price}</p>
    </div>
    <p className="category">{category}</p>
  </div>
)


export default Product
