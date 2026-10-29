import { Link } from 'react-router-dom'
import { House, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import './MyNavbar.css'

function MyNavbar() {
  const { cartCount } = useCart()

  return (
    <>
      <div className="promo-banner">
        <p>
          <strong>SPEDIZIONE GRATUITA</strong>
          <span className="promo-separator"> · </span>
          <strong>BARRACCIA-NASONE IN OMAGGIO</strong>
        </p>
        <p className="promo-banner-subtitle">
          Per ordini superiori a 99 € · Daje, approfittane!
        </p>
      </div>

      <header className="navbar">
        <Link to="/" className="navbar-logo">
          Roma, daje.
        </Link>

        <nav>
          <Link to="/" aria-label="Home" title="Home">
            <House size={21} strokeWidth={1.8} />
          </Link>

          <Link to="/prodotto">ER SAMPIETRINO</Link>

          <Link
            to="/carrello"
            className="navbar-cart"
            aria-label={`Carrello, ${cartCount} articoli`}
            title="Carrello"
          >
            <ShoppingCart size={21} strokeWidth={1.8} />
            <span className="navbar-cart-count">{cartCount}</span>
          </Link>
        </nav>
      </header>
    </>
  )
}

export default MyNavbar