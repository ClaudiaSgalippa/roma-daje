import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found-eyebrow">ERRORE 404</p>

      <h1>Aò, qua nun c'è niente.</h1>

      <p className="not-found-text">
        'Sta strada nun esiste... o forse l'hanno già rifatta.
      </p>

      <Link to="/" className="not-found-link">
        Torna a casa, daje
      </Link>
    </div>
  )
}

export default NotFound