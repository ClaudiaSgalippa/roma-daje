import { useState } from 'react'
import { sampietrinoVariants } from '../data/products'
import { Truck, PackageCheck, ShieldCheck } from 'lucide-react'
import './MyProduct.css'

function MyProduct() {
  // All'inizio mostra la prima variante: Er Classico.
  const [selectedVariant, setSelectedVariant] = useState(
    sampietrinoVariants[0],
  )

  return (
    <section className="product-showcase" id="prodotto">
      {/* Immagine della variante selezionata */}
      <div className="product-image-container">
        <img
          src={selectedVariant.image}
          alt={selectedVariant.name}
          className="product-image"
        />
      </div>

      {/* Informazioni sul prodotto */}
      <div className="product-info">
        <p className="product-location">
          {selectedVariant.location}
        </p>

        <h2>{selectedVariant.name}</h2>

        <p className="product-description">
          {selectedVariant.description}
        </p>

        <p className="product-price">€ 59,90</p>

        <p className="variant-label">
          Scegli la tua versione
        </p>

        {/* Pulsanti per scegliere la variante */}
        <div className="variant-options">
          {sampietrinoVariants.map((variant) => (
            <button
              key={variant.id}
              type="button"
              className={`variant-button ${
                selectedVariant.id === variant.id ? 'active' : ''
              }`}
              onClick={() => setSelectedVariant(variant)}
              aria-pressed={selectedVariant.id === variant.id}
            >
              {variant.name}
            </button>
          ))}
        </div>

        <p className="product-note">
          Quattro versioni, una sola città.
        </p>

        {/* Informazioni su spedizione, resi e garanzia */}
        <div className="product-policies">
          <div className="product-policy">
            <span className="product-policy-icon" aria-hidden="true">
              <Truck size={22} strokeWidth={1.7} />
            </span>

            <div>
              <h3>Spedizione</h3>
              <p>
                La spedizione costa 4,90 €. Sopra i 99 € te la
                offriamo noi, con la borraccia-nasone in omaggio!
              </p>
            </div>
          </div>

          <div className="product-policy">
            <span className="product-policy-icon" aria-hidden="true">
              <PackageCheck size={22} strokeWidth={1.7} />
            </span>

            <div>
              <h3>Reso gratuito entro 30 giorni</h3>
              <p>
                Hai cambiato idea? Tranquillo, capita pure
                ai migliori.
              </p>
            </div>
          </div>

          <div className="product-policy">
            <span className="product-policy-icon" aria-hidden="true">
              <ShieldCheck size={22} strokeWidth={1.7} />
            </span>

            <div>
              <h3>Garanzia di 2 anni</h3>
              <p>
                Er sampietrino è tosto. Ma se qualcosa non va,
                ci siamo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyProduct