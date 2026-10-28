import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import './MyNavbar.css'

function MyNavbar() {
  const { cartCount } = useCart()

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        Roma, daje.
      </Link>

      <nav>
        <Link to="/">HOME</Link>
        <Link to="/prodotto">ER SAMPIETRINO</Link>

        <Link
          to="/carrello"
          className="navbar-cart"
          aria-label={`Carrello, ${cartCount} articoli`}
        >
          <ShoppingCart size={21} strokeWidth={1.8} />
          <span className="navbar-cart-count">{cartCount}</span>
        </Link>
      </nav>
    </header>
  )
}

export default MyNavbar