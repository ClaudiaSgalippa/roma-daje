import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import DefaultLayout from './layout/DefaultLayout'
import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/prodotto" element={<ProductPage />} />
            <Route path="/carrello" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App