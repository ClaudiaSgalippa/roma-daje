import { useState } from 'react'
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
    </main>
  )
}

export default ProductPage