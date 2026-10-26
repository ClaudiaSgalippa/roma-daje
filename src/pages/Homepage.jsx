import './Homepage.css'
import MyProduct from '../components/MyProduct'

function Homepage() {
  return (
    <>
      <section className="homepage">
        <div className="homepage-content">
          <p className="homepage-eyebrow">
            FATTO A ROMA. PURE SE TE NE VAI.
          </p>

          <h1>
            Roma,
            <br />
            daje.
          </h1>

          <p className="homepage-description">
            La città, te la porti appresso.
            <br />
            Pure quando te manca er raccordo.
          </p>

          <a href="#prodotto" className="homepage-cta">
            SCOPRI ER SAMPIETRINO
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>

        <div className="homepage-product">
          <span className="product-placeholder">
            ER SAMPIETRINO
          </span>
        </div>
      </section>
      <MyProduct />
    </>
    
  )
}

export default Homepage