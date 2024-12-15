import React from 'react';
import './cardReviews.css';

function CardReviews({ movie, rating, onRate }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="movie-card">
        <img src={movie.previewImg} alt={movie.title} className="movie-image" loading="lazy" />
        <div className="movie-info">
          <h4 className="movie-title">{movie.title}</h4>
          <p className="movie-category">{movie.category}</p>
          <p className="movie-length">{movie.length}</p>
          <div className="star-rating">
            {renderStars(rating, onRate)}
          </div>
        </div>
      </div>
    </div>
  );
}

const renderStars = (rating, onRate) => {
  return Array.from({ length: 5 }, (_, i) => (
    <button 
      key={i}
      className={`star ${i < rating ? 'filled' : ''}`}
      onClick={() => onRate(i + 1)}
    >
      ★
    </button>
  ));
};

export default CardReviews;