import React from 'react';
import './trendCard.css';

function TrendCard({ slide }) {
  return (
    <div className="trend-card">
        <img src={slide.previewImg} alt={slide.title || "Movie Preview"} className="img-fluid" />
        <a href="#">
            Add to Calendar <ion-icon name="calendar-outline"></ion-icon>
        </a>
    </div>
  )
}

export default TrendCard;