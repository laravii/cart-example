import React from 'react'
import Header from '../../components/Header'
import AvaliableProductsCard from '../../components/AvaliableProductsCard/Card'
import dataItems from '../../db/database.json'

import { Container } from './styles'

function Home() {
  return (
    <Container>
      <Header />
      <AvaliableProductsCard items={dataItems.items} />
    </Container>
  )
}

export default Home
