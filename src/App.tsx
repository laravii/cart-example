import React, { useContext, useEffect } from 'react'
import { CartContext } from './contexts/Cart/CartContext'
import Home from './pages/Home'

function App() {
  const {
    gettingProductsSaves,
    productsAtCart,
    selectedProductsSaves,
  } = useContext(CartContext)

  useEffect(() => {
    gettingProductsSaves()
  }, [productsAtCart, selectedProductsSaves])

  return <Home />
}

export default App
