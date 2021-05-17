import { IProduct } from '../../constants/productInterfaces'

export interface IProductProps {
  item: IProduct
  isOpen: boolean
  index: number
}

export interface IInfosCartProps {
  readonly isProductDescription?: boolean
}

export interface ICartProps {
  readonly showingCart: boolean
}
