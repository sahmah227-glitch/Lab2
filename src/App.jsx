import { useState } from "react";
import "./App.css";
import moviesData from "./data/moviesData";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState(moviesData);

  const handleBuyTicket = (movieId) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId && movie.ticket > 0) {
        return {
          ...movie,
          ticket: movie.ticket - 1,
        };
      }
      return movie;
    });

    setMovies(updatedMovies);
  };

  return (
    <div className="app">
      <h1 className="title">Movies</h1>

      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onBuy={handleBuyTicket}
          />
        ))}
      </div>
    </div>
  );
}

export default App;