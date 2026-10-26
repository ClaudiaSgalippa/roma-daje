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
        <a href="#prodotto">Er sampietrino</a>
      </nav>
    </header>
  )
}

export default MyNavbar