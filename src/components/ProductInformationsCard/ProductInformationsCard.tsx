import React, { useContext } from 'react'
import { IAvaliableProduct } from '../../constants/productInterfaces'
import { CartContext } from '../../contexts/Cart/CartContext'

import {
  InfosProductCard,
  Description,
  Line,
  LikeIcon,
  Tag,
  PriceContainer,
  PriceInfos,
  InstallmentInfos,
  Button,
  ArrowIcon,
} from './styles'

function ProductInformationsCard({ product }: IAvaliableProduct) {
  const { name, price } = product
  const { value, installments, installmentValue } = price

  const { addingProductAtCart } = useContext(CartContext)

  const formatedPrice = (value: number, isPrincipalPrice: boolean) => {
    const price = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    const formated = isPrincipalPrice ? price.replace('R$', '') : price

    return formated
  }

  return (
    <InfosProductCard>
      <Description>
        {name}
        <LikeIcon />
      </Description>
      <Line />
      <Tag>Melhor preço</Tag>
      <PriceContainer>
        <PriceInfos>
          <InstallmentInfos>
            <span>{installments} </span>
            <h2> R$</h2>
            <h1>{formatedPrice(installmentValue, true)}</h1>
          </InstallmentInfos>
          <h5>
            ou <span>{formatedPrice(value, false)}</span> à vista
          </h5>
        </PriceInfos>
        <Button onClick={() => addingProductAtCart(product)}>
          Adicionar ao carrinho <ArrowIcon />
        </Button>
      </PriceContainer>
    </InfosProductCard>
  )
}

export default ProductInformationsCard
