import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Quando cambia pagina riporta lo scroll in alto.
// Se l'indirizzo ha un'ancora (es. /prodotto#faq) ci pensa il footer.
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default ScrollToTop