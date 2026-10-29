import { useState } from 'react'
import { Mountain, Landmark, Ruler, House, ChevronDown, Truck, PackageCheck, ShieldCheck } from 'lucide-react'
import { sampietrinoVariants } from '../data/products'
import { useCart } from '../context/CartContext'
import './ProductPage.css'

const faqItems = [
  {
    question: 'Ma è davvero un sampietrino romano?',
    answer:
      'È Er Sampietrino: un omaggio in pietra naturale a uno dei simboli più riconoscibili de Roma. Bello da vedere, senza dover rifare la strada.',
  },
  {
    question: 'Come scelgo la mia versione?',
    answer:
      'Facile: scegli la zona di Roma che preferisci tra quelle disponibili e aggiungila al carrello. Ogni versione ha la sua personalità!',
  },
  {
    question: 'Quanto costa la spedizione?',
    answer:
      'La spedizione costa 4,90 € ed è gratuita per ordini da 99 €. La consegna è prevista indicativamente entro 2–5 giorni lavorativi dalla spedizione. Daje, manca poco!',
  },
  {
    question: 'Quando arriva la barraccia-nasone in omaggio?',
    answer:
      'La barraccia-nasone è in omaggio con ordini da almeno 99 €. Un altro pezzo di Roma da portarsi sempre appresso!',
  },
  {
    question: 'Posso restituire il prodotto?',
    answer:
      'Certo! Puoi richiedere il reso entro 30 giorni dalla consegna.',
  },
  {
    question: 'Ma c’è la garanzia?',
    answer:
      'Certo! Er Sampietrino è coperto dalla garanzia legale di conformità di 2 anni, prevista per gli acquisti dei consumatori. Se qualcosa non va come dovrebbe, non te la devi sbrigà da solo!',
  },
  {
    question: 'Ma er sampietrino vissuto è già rovinato?',
    answer:
      'Le piccole irregolarità e le imperfezioni dichiarate fanno parte del suo carattere: ogni pezzo ha la sua storia, mica è uscito da una catena di montaggio! Se invece arriva danneggiato durante il trasporto, contattaci: quello non fa parte del look.',
  },
]

function ProductPage() {
  const [selectedVariant, setSelectedVariant] = useState(
    sampietrinoVariants[0],
  )
  const [quantity, setQuantity] = useState(1)
  const [openFaq, setOpenFaq] = useState(null)

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

  function toggleFaq(index) {
    setOpenFaq((current) => (current === index ? null : index))
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
                  setQuantity((current) =>
                    Math.max(1, current - 1),
                  )
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

          {/* Spedizione, resi e garanzia */}
          <div className="product-purchase-info">
            <div className="purchase-info-item">
              <Truck
                className="purchase-info-icon"
                aria-hidden="true"
              />

              <div>
                <h3>Spedizione</h3>
                <p>4,90 € · Gratis da 99 €</p>
                <p>Consegna in 2–5 giorni lavorativi</p>
              </div>
            </div>

            <div className="purchase-info-item">
              <PackageCheck
                className="purchase-info-icon"
                aria-hidden="true"
              />

              <div>
                <h3>Resi</h3>
                <p>Possibilità di reso entro 30 giorni</p>
              </div>
            </div>

            <div className="purchase-info-item">
              <ShieldCheck
                className="purchase-info-icon"
                aria-hidden="true"
              />

              <div>
                <h3>Garanzia</h3>
                <p>2 anni di garanzia legale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheda tecnica */}
      <section className="product-specs">
        <div className="product-specs-heading">
          <p className="product-detail-eyebrow">
            LA CARTA D'IDENTITÀ
          </p>

          <h2>I dettagli, daje.</h2>

          <p>
            Tutto quello che c'è da sapere sul tuo nuovo coinquilino.
          </p>
        </div>

        <div className="product-specs-grid">
          <article className="product-spec-card">
            <Mountain
              className="product-spec-icon"
              aria-hidden="true"
            />
            <p className="product-spec-label">MATERIALE</p>
            <h3>Pietra naturale</h3>
            <p>Leucitite</p>
          </article>

          <article className="product-spec-card">
            <Landmark
              className="product-spec-icon"
              aria-hidden="true"
            />
            <p className="product-spec-label">TIPOLOGIA</p>
            <h3>Sampietrino romano</h3>
            <p>Un classico de Roma.</p>
          </article>

          <article className="product-spec-card">
            <Ruler
              className="product-spec-icon"
              aria-hidden="true"
            />
            <p className="product-spec-label">DIMENSIONI</p>
            <h3>12 × 12 × 6 cm</h3>
            <p>Piccolo fuori, romano dentro.</p>
          </article>

          <article className="product-spec-card">
            <House
              className="product-spec-icon"
              aria-hidden="true"
            />
            <p className="product-spec-label">UTILIZZO</p>
            <h3>Oggetto decorativo</h3>
            <p>Fa scena, mica lavori stradali.</p>
          </article>
        </div>
      </section>

      {/* Domande frequenti */}
      <section className="product-faq" id="faq">
        <div className="product-faq-heading">
          <p className="product-detail-eyebrow">
            TE LO SPIAMO NOI
          </p>

          <h2>Domande? Daje.</h2>

          <p>
            Tutto quello che volevi sapere su Er Sampietrino.
          </p>
        </div>

        <div className="product-faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index
            const answerId = `faq-answer-${index}`

            return (
              <article
                className="product-faq-item"
                key={item.question}
              >
                <h3>
                  <button
                    type="button"
                    className="product-faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span>{item.question}</span>

                    <ChevronDown
                      className={
                        isOpen
                          ? 'faq-chevron is-open'
                          : 'faq-chevron'
                      }
                      size={20}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    className="product-faq-answer"
                    id={answerId}
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default ProductPage