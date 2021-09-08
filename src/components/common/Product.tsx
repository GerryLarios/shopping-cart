import React, { FunctionComponent } from 'react'
import { ProductType } from '../../types'

const Product: FunctionComponent<ProductType> = ({ title, price, category, image }) => (
  <div className="product">
    <img src={image} alt={title} />
    <p>{title}</p>
    <p>{price}</p>
    <p>{category}</p>
  </div>
)


export default Product
