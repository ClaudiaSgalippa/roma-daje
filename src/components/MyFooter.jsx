import './MyFooter.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { InstagramIcon, TikTokIcon, FacebookIcon } from './SocialIcons'

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/', Icon: InstagramIcon },
  { name: 'TikTok', url: 'https://www.tiktok.com/', Icon: TikTokIcon },
  { name: 'Facebook', url: 'https://www.facebook.com/', Icon: FacebookIcon },
]

function MyFooter() {
  const location = useLocation()
  const [isSubscribed, setIsSubscribed] = useState(false)

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

  // Newsletter dimostrativa: svuota il campo e mostra la conferma
  function handleNewsletterSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    setIsSubscribed(true)
  }

  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="newsletter-text">
          <h3>Le news, senza er traffico.</h3>
          <p
            className={isSubscribed ? 'newsletter-confirmed' : undefined}
            role="status"
          >
            {isSubscribed
              ? 'Daje! Iscrizione completata, grazie.'
              : 'Novità, prodotti e storie direttamente nella tua casella email.'}
          </p>
        </div>
  
        <form
          className="newsletter-form"
          onSubmit={handleNewsletterSubmit}
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

      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Roma, daje.
          </Link>

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
          <Link to="/prodotto">Er Sampietrino</Link>
          <Link to="/prodotto">Le varianti</Link>
        </div>

        <div className="footer-column">
          <h3>Seguici</h3>

          <div className="footer-socials">
            {socialLinks.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Roma, daje. Project by Claudia Sgalippa</p>
        <p>Fatto co' core a Roma per Roma.</p>
      </div>
    </footer>
  )
}

export default MyFooter