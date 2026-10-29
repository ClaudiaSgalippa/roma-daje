import './MyFooter.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function MyFooter() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#faq') {
      requestAnimationFrame(() => {
        document.getElementById('faq')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    }
  }, [location])

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            Roma, daje.
          </a>

          <p>La città, te la porti appresso.</p>
          <p>Oggetti con un po' de Roma dentro.</p>
        </div>

        <div className="footer-column">
          <h3>Assistenza</h3>
          <a href="#">Contattaci</a>
          <Link to="/prodotto#faq">FAQ</Link>
          <a href="#">Spedizioni</a>
          <a href="#">Resi e rimborsi</a>
        </div>

        <div className="footer-column">
          <h3>Informazioni</h3>
          <a href="#">Chi siamo</a>
          <a href="#">Termini e condizioni</a>
          <a href="#">Privacy policy</a>
          <a href="#">Cookie policy</a>
        </div>

        <div className="footer-column">
          <h3>Il prodotto</h3>
          <a href="#prodotto">Er Sampietrino</a>
          <a href="#prodotto">Le varianti</a>
        </div>

        <div className="footer-column">
          <h3>Seguici</h3>
          <a href="#">Instagram ↗</a>
          <a href="#">TikTok ↗</a>
          <a href="#">Facebook ↗</a>
        </div>
      </div>

      <div className="footer-newsletter">
        <div className="newsletter-text">
          <h3>Le news, senza er traffico.</h3>
          <p>
            Novità, prodotti e storie direttamente
            nella tua casella email.
          </p>
        </div>

        <form
          className="newsletter-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            La tua email
          </label>

          <input
            id="newsletter-email"
            type="email"
            placeholder="La tua email"
            required
          />

          <button type="submit">Iscriviti ↗</button>
        </form>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Roma, daje.</p>
        <p>Fatto co' core a Roma.</p>
      </div>
    </footer>
  )
}

export default MyFooter