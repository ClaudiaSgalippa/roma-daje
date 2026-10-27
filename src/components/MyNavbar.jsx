import { Link } from 'react-router-dom'
import './MyNavbar.css'

function MyNavbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        Roma, daje.
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/prodotto">Er sampietrino</Link>
      </nav>
    </header>
  )
}

export default MyNavbar