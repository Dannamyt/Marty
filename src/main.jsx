import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { CategoryProvider } from './context/CategoriesContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { UserProvider } from './context/UserContext.jsx'
import './index.css'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe/stripe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoryProvider>
          <CartProvider>
              <Elements stripe={stripePromise}>
                <App />
              </Elements>
          </CartProvider>
        </CategoryProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
