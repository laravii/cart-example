import React, { useContext, useEffect, useState } from 'react'
import {
  Container,
  Logo,
  HamburgerMenu,
  CartAmountInfo,
  Button,
} from './styles'
import BuscapeLogo from '../../assets/logo.svg'
import { CartContext } from '../../contexts/Cart/CartContext'
import Cart from '../Cart'

function Header() {
  const {
    cart,
    insertProductsSaveinCart,
    selectedProductsSaves,
    productsAtCart,
  } = useContext(CartContext)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => insertProductsSaveinCart(), [
    selectedProductsSaves,
    productsAtCart,
  ])

  const openingCart = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <Container>
      <Logo src={BuscapeLogo} alt="Logo" />
      <Button onClick={openingCart}>
        <HamburgerMenu />
      </Button>
      <Cart items={cart} isOpen={openMenu} />
      <CartAmountInfo>{cart.length}</CartAmountInfo>
    </Container>
  )
}

export default Header
