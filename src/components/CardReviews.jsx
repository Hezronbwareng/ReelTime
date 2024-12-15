import React from 'react';
import './cardReviews.css';

const CardReview = ({ movie, rating, onRatingChange }) => {
  const handleStarClick = (starIndex) => {
    // Update the rating based on the clicked star index
    onRatingChange(movie.id, starIndex + 1);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i < rating ? 'filled' : ''}`}
          onClick={() => handleStarClick(i)}
        >
          &#9733; {/* Unicode for a star */}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="card-review">
      <div
        className="card-review-image"
        style={{ backgroundImage: `url(${movie.bgImg})` }}
      >
        <div className="card-review-content">
          <img
            src={movie.titleImg}
            alt={movie.title}
            className="card-review-title-img"
          />
          <h3>{movie.title}</h3>
          <p className="card-review-year">{movie.year}</p>
          <p className="card-review-category">{movie.category}</p>

          {/* Render the star rating */}
          <div className="stars">{renderStars()}</div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
