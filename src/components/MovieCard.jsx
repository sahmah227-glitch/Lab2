import "../css/MovieCard.css";

function MovieCard({ movie, onBuy }) {
  const getButtonClass = () => {
    if (movie.ticket === 0) return "sold-out";
    if (movie.ticket <= 2) return "low-ticket";
    if (movie.ticket <= 5) return "medium-ticket";
    return "available-ticket";
  };

  const getButtonText = () => {
    if (movie.ticket === 0) return "Sold Out";
    if (movie.ticket === 1) return "Last Ticket";
    return "Buy Now";
  };

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.name} className="movie-image" />

      <div className="movie-content">
        <h2>{movie.name}</h2>
        <p>Year: {movie.year}</p>
        <p>Price: {movie.price} EGP</p>
        <p>Tickets: {movie.ticket}</p>

        <button
          className={`buy-btn ${getButtonClass()}`}
          onClick={() => onBuy(movie.id)}
          disabled={movie.ticket === 0}
        >
          {getButtonText()}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;