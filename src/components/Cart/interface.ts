import { IProduct } from '../../constants/productInterfaces'

export interface ICartComponentProps {
  items: IProduct[]
  isOpen: boolean
}

export interface ICartProps {
  readonly showingCart: boolean
}
