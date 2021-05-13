import React, { useContext } from 'react'
import { ICartComponentProps } from '../../constants/types'
import { CartContext } from '../../contexts/CartContext'

import {
  Product,
  ProductImage,
  ProductInfo,
  InfosContainer,
  Infos,
  Button,
} from './styles'

function CartProducts({ items, isOpen }: ICartComponentProps) {
  const { deletingProductAtCart } = useContext(CartContext)

  const formatedPrice = (value: number): string => {
    const price = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return price
  }

  return (
    <>
      {items.map((item, index) => {
        const { price, name, images } = item
        const { installments, installmentValue, value } = price
        return (
          <Product showingCart={isOpen} key={index}>
            <ProductInfo>
              <ProductImage src={images[0]} alt="Foto do produto" />
              <InfosContainer>
                <Infos isProductDescription>{name}</Infos>
                <Infos>
                  {installments}x {formatedPrice(installmentValue)}
                </Infos>
                <Infos>{formatedPrice(value)}</Infos>
              </InfosContainer>
            </ProductInfo>
            <Button onClick={() => deletingProductAtCart(index)}>
              <Infos>X</Infos>
            </Button>
          </Product>
        )
      })}
    </>
  )
}

export default CartProducts
