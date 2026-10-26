import { useState } from 'react'
import { sampietrinoVariants } from '../data/products'
import './MyProduct.css'

function MyProduct() {
  // Memorizza la variante selezionata.
  // All'inizio mostra la prima: Er Classico.
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

        <p className="product-price">€ 19,90</p>

        <p className="variant-label">
          Scegli la tua versione
        </p>

        {/* Un pulsante per ogni variante */}
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
      </div>
    </section>
  )
}

export default MyProduct