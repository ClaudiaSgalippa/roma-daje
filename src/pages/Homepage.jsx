import './Homepage.css'
import MyProduct from '../components/MyProduct'
import MyReviews from '../components/MyReviews'

function Homepage() {
  return (
    <>
      <section className="homepage">
        <div className="homepage-content">

          {/* Nuvola decorativa a sinistra */}
          <div
            className="homepage-cloud homepage-cloud-left"
            aria-hidden="true"
          >
            <svg viewBox="0 0 160 90" fill="none">
              <path
                d="M25 65H125C143 65 150 52 143 40C138 30 127 28 118 32C115 15 99 7 84 13C73 17 67 27 67 38C52 28 34 35 32 50C20 48 12 55 15 63C17 65 21 65 25 65Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Nuvola decorativa a destra */}
          <div
            className="homepage-cloud homepage-cloud-right"
            aria-hidden="true"
          >
            <svg viewBox="0 0 160 90" fill="none">
              <path
                d="M25 65H125C143 65 150 52 143 40C138 30 127 28 118 32C115 15 99 7 84 13C73 17 67 27 67 38C52 28 34 35 32 50C20 48 12 55 15 63C17 65 21 65 25 65Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

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
            src="/images/borraccia-nasone.png"
            alt="La borraccia-nasone, omaggio di Roma, daje."
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
            La borraccia-nasone è in omaggio con ordini superiori a 99 €.
          </p>

          <p className="gift-note">
            <strong>Spendi più de 99 €?</strong> Er Nasone è tuo. Daje!
          </p>
        </div>
      </section>

      <section className="homepage-reviews">

        {/* Balloon decorativo a sinistra */}
        <div
          className="reviews-balloon reviews-balloon-left"
          aria-hidden="true"
        >
          <svg viewBox="0 0 160 120" fill="none">
            <path
              d="M22 12H138C145 12 150 18 150 25V78C150 85 145 90 138 90H65L40 108L45 90H22C15 90 10 85 10 78V25C10 18 15 12 22 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="52" cy="51" r="4" fill="currentColor" />
            <circle cx="80" cy="51" r="4" fill="currentColor" />
            <circle cx="108" cy="51" r="4" fill="currentColor" />
          </svg>
        </div>

        {/* Balloon decorativo a destra */}
        <div
          className="reviews-balloon reviews-balloon-right"
          aria-hidden="true"
        >
          <svg viewBox="0 0 160 120" fill="none">
            <path
              d="M22 12H138C145 12 150 18 150 25V78C150 85 145 90 138 90H65L40 108L45 90H22C15 90 10 85 10 78V25C10 18 15 12 22 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="52" cy="51" r="4" fill="currentColor" />
            <circle cx="80" cy="51" r="4" fill="currentColor" />
            <circle cx="108" cy="51" r="4" fill="currentColor" />
          </svg>
        </div>

        <MyReviews />
      </section>
    </>
  )
}

export default Homepage