import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './CartPage.css'

function CartPage() {
  const {
    cartItems,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useCart()

  return (
    <main className="cart-page">
      <h1>IL TUO CARRELLO</h1>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Qua non c'è ancora niente, daje!</p>
          <Link to="/prodotto" className="cart-continue">
            Vai a scoprire Er Sampietrino
          </Link>
        </div>
      ) : (
        <>
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
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        aria-label={`Diminuisci quantità di ${item.name}`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
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
                </div>

                <p className="cart-item-subtotal">
                  {(item.price * item.quantity)
                    .toFixed(2)
                    .replace('.', ',')} €
                </p>
              </article>
            ))}
          </div>

          <div className="cart-summary">
            <p>
              <span>Subtotale</span>
              <strong>
                {cartTotal.toFixed(2).replace('.', ',')} €
              </strong>
            </p>

            <p className="cart-summary-note">
              Spedizione esclusa, per ora.
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
          </div>
        </>
      )}
    </main>
  )
}

export default CartPage