import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

function Schedule() {
  const [movies, setMovies] = useState([]);

  // Function to fetch data
  const fetchData = () => {
    fetch('/data/movieData.json') 
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => setMovies(data))
      .catch((e) => console.error(e.message));
  };

  // Fetch data on initial render
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening this week</h4>
        </div>
        <div className="row">
          <div className="filters">
            <p>Filters</p>
          </div>
        </div>
        <div className="row mt-5">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <Card key={movie._id} movie={movie} />
            ))
          ) : (
            <p>No movies available.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
