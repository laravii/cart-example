import React from 'react'
import { ICartComponentProps } from '../../constants/types'
import CartProducts from '../CartProducts'

import { Container, Line, SubtotalContainer } from './styles'

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
      <CartProducts isOpen={isOpen} items={items} />
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
