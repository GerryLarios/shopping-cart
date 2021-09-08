import { BASE_PATH_IMAGES, MOCK_PRODUCTS } from '../constants'
import { ProductType } from '../types'

export const fetchProducts = (): ProductType[] => {
  return MOCK_PRODUCTS.map(p => ({
    ...p,
    image: `${BASE_PATH_IMAGES}/${p.category}.png`
  }))
}

// export const fetchProducts = async (): Promise<ProductType[]> => {
//   const response = await fetch(`${BASE_URL_API}/products`)
//   const result = await response.json()
//   return result as ProductType[]
// }
