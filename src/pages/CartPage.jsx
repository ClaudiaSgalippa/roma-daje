import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './CartPage.css'

const FREE_SHIPPING_THRESHOLD = 99
const SHIPPING_COST = 4.9
const MAX_QUANTITY = 99

function CartPage() {
  const {
    cartItems,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useCart()

  const [showQuantityLimit, setShowQuantityLimit] = useState(null)

  const hasFreeShipping = cartTotal >= FREE_SHIPPING_THRESHOLD

  const shippingCost =
    hasFreeShipping || cartItems.length === 0 ? 0 : SHIPPING_COST

  const finalTotal = cartTotal + shippingCost

  const amountToFreeShipping = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - cartTotal,
  )

  function handleIncreaseQuantity(item) {
    if (item.quantity >= MAX_QUANTITY) {
      setShowQuantityLimit(item.id)
      return
    }

    setShowQuantityLimit(null)
    updateQuantity(item.id, item.quantity + 1)
  }

  function handleDecreaseQuantity(item) {
    setShowQuantityLimit(null)
    updateQuantity(item.id, item.quantity - 1)
  }

  return (
    <div className="cart-page">
      <h1>IL TUO CARRELLO</h1>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Qua non c'è ancora niente, daje 'n po!</p>

          <Link to="/prodotto" className="cart-continue">
            Vai a scoprire Er Sampietrino
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <p className="cart-item-location">
                    {item.location}
                  </p>

                  <h2>{item.name}</h2>

                  <p className="cart-item-price">
                    {item.price.toFixed(2).replace('.', ',')} €
                  </p>

                  <div className="cart-item-actions">
                    <div className="quantity-selector">
                      <button
                        type="button"
                        onClick={() => handleDecreaseQuantity(item)}
                        aria-label={`Diminuisci quantità di ${item.name}`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() => handleIncreaseQuantity(item)}
                        aria-label={`Aumenta quantità di ${item.name}`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Rimuovi
                    </button>
                  </div>

                  {showQuantityLimit === item.id && (
                    <p className="cart-quantity-limit" role="alert">
                      Aò, 99 so' già tanti! Nun vorrai mica rifà
                      tutta la strada?
                    </p>
                  )}
                </div>

                <p className="cart-item-subtotal">
                  {(item.price * item.quantity)
                    .toFixed(2)
                    .replace('.', ',')} €
                </p>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            {hasFreeShipping ? (
              <div className="cart-benefit-unlocked">
                <p className="cart-benefit-message">
                  <span>Daje! Hai sbloccato</span>

                  <strong>Spedizione gratuita</strong>

                  <span>
                    e la borraccia-nasone in omaggio!
                  </span>
                </p>

                <div className="cart-gift-image">
                  <img
                    src="/images/borraccia-nasone.png"
                    alt="Borraccia-nasone in omaggio"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              <p className="cart-benefit-message">
                <span>Ti mancano</span>

                <strong className="cart-missing-amount">
                  {amountToFreeShipping.toFixed(2).replace('.', ',')} €
                </strong>

                <span>
                  per la spedizione gratuita e la borraccia-nasone in omaggio.
                </span>
              </p>
            )}

            <p>
              <span>Subtotale</span>
              <strong>
                {cartTotal.toFixed(2).replace('.', ',')} €
              </strong>
            </p>

            <p>
              <span>Spedizione</span>
              <strong>
                {shippingCost === 0
                  ? 'Gratis'
                  : `${shippingCost.toFixed(2).replace('.', ',')} €`}
              </strong>
            </p>

            <p className="cart-summary-total">
              <span>Totale</span>
              <strong>
                {finalTotal.toFixed(2).replace('.', ',')} €
              </strong>
            </p>

            <button
              type="button"
              className="add-to-cart-button"
              disabled
            >
              Checkout — prossimamente
            </button>

            <Link to="/prodotto" className="cart-continue">
              Continua gli acquisti
            </Link>
          </aside>
        </div>
      )}
    </div>
  )
}

export default CartPage