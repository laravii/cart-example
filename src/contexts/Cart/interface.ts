import { IProduct } from '../../constants/productInterfaces'

export interface ICartContextData {
  gettingProductsSaves(): void
  addingProductAtCart(product: IProduct): void
  deletingProductAtCart(index: number): void
  insertProductsSaveinCart(): void
  productsAtCart: IProduct[]
  cart: IProduct[]
  selectedProductsSaves: string | null
}

export interface ICartContextProps {
  children: React.ReactNode
}
