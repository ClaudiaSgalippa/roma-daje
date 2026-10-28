import "./MyReviews.css";

const reviews = [
  {
    text: "Finalmente un sampietrino che non me fa inciampà.",
    author: "Er fijo de Roma",
  },
  {
    text: "Mamma ha detto che è 'na cafonata. Ne vuole uno pure lei.",
    author: "Anonimo de Tor Pignattara",
  },
  {
    text: "Rapporto qualità-caos: imbattibile.",
    author: "Un romano nostalgico",
  },
];

function MyReviews() {
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-heading">
        <p className="reviews-eyebrow">Parola de romani</p>

        <h2 id="reviews-title">Nun ce crederai, ma je piace.</h2>

        <p className="reviews-description">
          Piccolo, de pietra e già più amato de certi parenti.
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.author}>
            <div className="review-stars" aria-label="Cinque stelle">
              ★★★★★
            </div>

            <blockquote className="review-text">
              “{review.text}”
            </blockquote>

            <p className="review-author">{review.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MyReviews;