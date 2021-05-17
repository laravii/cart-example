import React, { useContext } from 'react'
import { CartContext } from '../../contexts/Cart/CartContext'
import { IProductProps } from './interface'

import {
  ProductCard,
  ProductImage,
  ProductInfo,
  InfosContainer,
  Infos,
  Button,
} from './styles'

const Product = ({ item, isOpen, index }: IProductProps) => {
  const { deletingProductAtCart } = useContext(CartContext)
  const { price, name, images } = item
  const { installments, installmentValue, value } = price

  const formatedPrice = (value: number): string => {
    const price = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return price
  }

  return (
    <ProductCard showingCart={isOpen} key={index}>
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
    </ProductCard>
  )
}

export default Product
