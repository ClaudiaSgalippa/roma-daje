import { useState } from 'react'
import { Mountain, Landmark, Ruler, House } from 'lucide-react'
import { sampietrinoVariants } from '../data/products'
import { useCart } from '../context/CartContext'
import './ProductPage.css'

function ProductPage() {
  const [selectedVariant, setSelectedVariant] = useState(
    sampietrinoVariants[0],
  )

  const [quantity, setQuantity] = useState(1)

  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(
      {
        ...selectedVariant,
        price: 59.9,
      },
      quantity,
    )
  }

  return (
    <main className="product-page">
      {/* Dettagli principali del prodotto */}
      <section className="product-detail">
        <div className="product-detail-image">
          <img
            src={selectedVariant.image}
            alt={selectedVariant.name}
          />
        </div>

        <div className="product-detail-info">
          <p className="product-detail-eyebrow">
            {selectedVariant.location}
          </p>

          <h1>{selectedVariant.name}</h1>

          <p className="product-detail-description">
            {selectedVariant.description}
          </p>

          <p className="product-detail-price">59,90 €</p>

          <p className="product-detail-label">
            Scegli la tua versione
          </p>

          <div className="product-detail-variants">
            {sampietrinoVariants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                className={
                  selectedVariant.id === variant.id
                    ? 'detail-variant active'
                    : 'detail-variant'
                }
                onClick={() => setSelectedVariant(variant)}
                aria-pressed={selectedVariant.id === variant.id}
              >
                {variant.name}
              </button>
            ))}
          </div>

          <p className="product-detail-label">Quantità</p>

          <div className="product-detail-actions">
            <div className="quantity-selector">
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => Math.max(1, current - 1))
                }
                aria-label="Diminuisci quantità"
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => current + 1)
                }
                aria-label="Aumenta quantità"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="add-to-cart-button"
              onClick={handleAddToCart}
            >
              Aggiungi al carrello ·{' '}
              {(59.9 * quantity).toFixed(2).replace('.', ',')} €
            </button>
          </div>

          <p className="product-detail-note">
            Un piccolo pezzo di Roma, da portare sempre con te.
          </p>
        </div>
      </section>

      {/* Scheda tecnica */}
      <section className="product-specs">
        <div className="product-specs-heading">
          <p className="product-detail-eyebrow">LA CARTA D'IDENTITÀ</p>
          <h2>I dettagli, daje.</h2>
          <p>
            Tutto quello che c'è da sapere sul tuo nuovo coinquilino.
          </p>
        </div>

        <div className="product-specs-grid">
          <article className="product-spec-card">
            <Mountain className="product-spec-icon" aria-hidden="true" />
            <p className="product-spec-label">MATERIALE</p>
            <h3>Pietra naturale</h3>
            <p>Leucitite</p>
          </article>

          <article className="product-spec-card">
            <Landmark className="product-spec-icon" aria-hidden="true" />
            <p className="product-spec-label">TIPOLOGIA</p>
            <h3>Sampietrino romano</h3>
            <p>Un classico de Roma.</p>
          </article>

          <article className="product-spec-card">
            <Ruler className="product-spec-icon" aria-hidden="true" />
            <p className="product-spec-label">DIMENSIONI</p>
            <h3>12 × 12 × 6 cm</h3>
            <p>Piccolo fuori, romano dentro.</p>
          </article>

          <article className="product-spec-card">
            <House className="product-spec-icon" aria-hidden="true" />
            <p className="product-spec-label">UTILIZZO</p>
            <h3>Oggetto decorativo</h3>
            <p>Fa scena, mica lavori stradali.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default ProductPage