export interface IProduct {
  id: number
  name: string
  images: string[]
  price: {
    value: number
    installments: number
    installmentValue: number
  }
}

export interface IAvaliableProduct {
  product: IProduct
}

export interface IItems {
  items: IAvaliableProduct[]
}
