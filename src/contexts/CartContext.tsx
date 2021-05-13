import React, { createContext, useState } from 'react'
import { ICartContextData, ICartProps, IProduct } from '../constants/types'

export const CartContext = createContext({} as ICartContextData)

export const CartProvider = ({ children }: ICartProps) => {
  const [cart, setCart] = useState<IProduct[]>([])
  const productsAtCart: IProduct[] = []
  const selectedProductsSaves = localStorage.getItem('@Cart')

  const gettingProductsSaves = () => {
    if (selectedProductsSaves !== null) {
      const productsSaves = JSON.parse(selectedProductsSaves)
      return productsSaves
    }
  }

  const insertProductsSaveinCart = () => {
    const productsSaved = gettingProductsSaves()
    productsSaved.forEach((product: IProduct) => {
      productsAtCart.push(product)
      setCart(productsAtCart)
    })
  }

  const addingProductAtCart = (product: IProduct) => {
    insertProductsSaveinCart()
    productsAtCart.push(product)
    setCart(productsAtCart)
    localStorage.setItem('@Cart', JSON.stringify(productsAtCart))
  }

  const deletingProductAtCart = (index: number) => {
    insertProductsSaveinCart()
    productsAtCart.splice(index, 1)
    setCart(productsAtCart)
    localStorage.setItem('@Cart', JSON.stringify(productsAtCart))
  }

  return (
    <CartContext.Provider
      value={{
        gettingProductsSaves,
        addingProductAtCart,
        deletingProductAtCart,
        insertProductsSaveinCart,
        productsAtCart,
        selectedProductsSaves,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
