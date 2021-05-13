import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CartProvider } from './contexts/CartContext'
import { GlobalStyles } from './styles/globalStyles'

ReactDOM.render(
  <>
    <GlobalStyles />
    <CartProvider>
      <App />
    </CartProvider>
  </>,
  document.getElementById('root'),
)
