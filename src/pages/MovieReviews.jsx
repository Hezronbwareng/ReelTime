import React, { useState, useEffect } from 'react';
import './movieReviews.css';
import CardReviews from '../components/CardReviews';

function MovieReviews() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ratings, setRatings] = useState({});

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:5173/data/movieData.json');
      if (!response.ok) throw new Error('Failed to fetch movies');
      const data = await response.json();
      setMovies(data);
    } catch (e) {
      console.error('Error fetching movies:', e.message);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleRatingChange = (movieId, newRating) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [movieId]: newRating
    }));
  };

  return (
    <section id="movie-reviews" className="movie-reviews">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Movie Reviews</h4>
        </div>
        <div className="row">
          {movies.map((movie) => (
            <CardReviews
              key={movie.id}
              movie={movie}
              rating={ratings[movie.id] || 0}
              onRate={handleRatingChange}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieReviews;