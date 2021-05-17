import React from 'react'
import { ICartComponentProps } from './interface'

import { Container, Line, SubtotalContainer } from './styles'
import Product from '../ProductCard'

function Cart({ items, isOpen }: ICartComponentProps) {
  const values = items.map((item) => item.price.value)
  const installmentValue = items.map((item) => item.price.installmentValue)

  const formatedPrice = (value: number): string => {
    const price = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return price
  }

  const totalValue = (values: number[]): string => {
    const total = values.reduce((total, current) => total + current, 0)
    return formatedPrice(total)
  }

  return (
    <Container showingCart={isOpen}>
      {items.map((item, index) => {
        return <Product item={item} index={index} isOpen={isOpen} />
      })}
      <SubtotalContainer>
        <strong>subtotal</strong>
        <Line />
        <strong>10x {totalValue(installmentValue)}</strong>
        <strong>ou {totalValue(values)} a vista</strong>
      </SubtotalContainer>
    </Container>
  )
}

export default Cart
