import { Link } from 'react-router-dom'
import './MyNavbar.css'

function MyNavbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        Roma, daje.
      </Link>

      <nav>
        <Link to="/">HOME</Link>
        <Link to="/prodotto">ER SAMPIETRINO</Link>
      </nav>
    </header>
  )
}

export default MyNavbar