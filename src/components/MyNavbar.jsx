import { Link } from 'react-router-dom'

function MyNavbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        ROMA, DAJE!
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <a href="#prodotto">Er sampietrino</a>
      </nav>
    </header>
  )
}

export default MyNavbar