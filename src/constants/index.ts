export const GITHUB_PROFILE_URL = 'https://github.com/GerryLarios'
export const BASE_URL_API = 'https://fakestoreapi.com'
export const BASE_PATH_IMAGES = '/static/images'

export const FREE_SHIPPING_PRICE_REACH = 1000
export const INTERNATIONAL_SHIPPING_PRICE = 15
export const NORMAL_SHIPPING_PRICE = 5

export const DEFAULT_STATE = {
  shippingPrice: 0,
  productsPrice: 0,
  totalPrice: 0,
  products: [],
  productsSelectionMade: false,
  user: {
    isInternationalAddress: true,
    isPremium: true,
    balance: 9999
  }
}

export const MOCK_DISCOUNTS = [
  {
    category: 'technology',
    percentage: 5
  },
  {
    category: 'clothes',
    percentage: 10
  }
]

export const MOCK_PRODUCTS = [
  {
    id: 1,
    price: 60,
    title: 'SSD 480 GB',
    category: 'technology'
  },
  {
    id: 2,
    price: 950,
    title: 'MacBook Pro',
    category: 'technology'
  },
  {
    id: 3,
    price: 19.99,
    title: 'Skinny Jeans',
    category: 'clothes'
  },
  {
    id: 4,
    price: 125,
    title: 'Suprime tshirt',
    category: 'clothes'
  },
  {
    id: 5,
    price: 30.12,
    title: 'Ozs Silver',
    category: 'jewelry'
  },
  {
    id: 6,
    price: 299.99,
    title: 'NBA Rings',
    category: 'jewelry'
  }
]
