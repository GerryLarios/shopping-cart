import { BASE_URL_API } from '../constants'
import { ProductType } from '../types'

export const fetchProducts = async (): Promise<ProductType[]> => {
  const response = await fetch(`${BASE_URL_API}/products`)
  const result = await response.json()
  return result as ProductType[]
}
