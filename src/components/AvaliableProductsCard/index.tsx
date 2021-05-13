import React from 'react'
import { IItems } from '../../constants/types'
import ImagesCard from '../ImagesCards'
import ProductInformationsCard from '../ProductInformationsCard'

import { Container } from './styles'

function AvaliableProductsCard({ items }: IItems) {
  return (
    <>
      {items.map((item) => {
        const { id, images } = item.product
        return (
          <Container key={id}>
            <ImagesCard images={images} />
            <ProductInformationsCard product={item.product} />
          </Container>
        )
      })}
    </>
  )
}

export default AvaliableProductsCard
