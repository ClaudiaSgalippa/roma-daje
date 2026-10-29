import './Homepage.css'
import MyProduct from '../components/MyProduct'
import MyReviews from '../components/MyReviews'

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

      <section
        className="gift-section"
        aria-labelledby="gift-title"
      >
        <div className="gift-image">
          <img
            src="/images/barraccia-nasone.png"
            alt="La barraccia-nasone, omaggio di Roma, daje."
            loading="lazy"
          />
        </div>

        <div className="gift-content">
          <p className="gift-eyebrow">
            ER REGALO CHE NUN T'ASPETTI
          </p>

          <h2 id="gift-title">
            Er Nasone te lo regaliamo noi.
          </h2>

          <p className="gift-description">
            Te porti a casa un pezzo de Roma e noi ce mettemo pure da beve.
            La barraccia-nasone è in omaggio con ordini superiori a 99 €.
          </p>

          <p className="gift-note">
            <strong>Spendi più de 99 €?</strong> Er Nasone è tuo. Daje!
          </p>
        </div>
      </section>

      <MyReviews />
    </>
  )
}

export default Homepage