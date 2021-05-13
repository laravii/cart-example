import React from 'react'

export interface IImages {
  images: string[]
}

export interface ICartProps {
  children: React.ReactNode
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

export interface ICartContextData {
  gettingProductsSaves(): void
  addingProductAtCart(product: IProduct): void
  deletingProductAtCart(index: number): void
  insertProductsSaveinCart(): void
  productsAtCart: IProduct[]
  cart: IProduct[]
  selectedProductsSaves: string | null
}
