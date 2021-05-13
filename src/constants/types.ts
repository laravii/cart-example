import React from 'react'

export interface ICartContextProps {
  children: React.ReactNode
}

export interface ICartContextData {
  gettingProductsSaves(): void
  addingProductAtCart(product: IProduct): void
  deletingProductAtCart(index: number): void
  insertProductsSaveinCart(): void
  productsAtCart: IProduct[]
  cart: IProduct[]
  selectedProductsSaves: string | null
}

export interface IImages {
  images: string[]
}

export interface IProductsInformations {
  description: string
  installment: number
  installmentPrice: number
  priceValue: number
}

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

export interface IInfosCartProps {
  readonly isProductDescription?: boolean
}

export interface ICartProps {
  readonly showingCart: boolean
}

export interface ICartComponentProps {
  items: IProduct[]
  isOpen: boolean
}
