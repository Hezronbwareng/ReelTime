import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './schedule.css'

function Schedule() {
  const filterList = [{
    _id: 1,
    name: 'All',
    active: true,
  }, {
    _id: 2,
    name: 'Romance',
    active: false,
  }, {
    _id: 3,
    name: 'Action',
    active: false,
  }, {
    _id: 4,
    name: 'Thriller',
    active: false,
  },
   {
    _id: 5,
    name: 'Horror',
    active: false,
  },
   {
    _id: 6,
    name: 'Adventure',
    active: false,
  }];

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);

  // Function to fetch data
  const fetchData = () => {
    fetch('/data/movieData.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);  
      })
      .catch((e) => console.error(e.message));
  };

  // Fetch data on initial render
  useEffect(() => {
    fetchData();
  }, []);

  // Filter movies based on selected category
  const handlerFilterMovies = (category) => {
    if (category === 'All') {
      setFilteredMovies(movies); 
    } else {
      setFilteredMovies(movies.filter(movie => movie.category === category));
    }
  };

  // Handle filter state toggle
  const handleFilterClick = (filterName) => {
    setFilters(filters.map(filter => {
      if (filter.name === filterName) {
        return { ...filter, active: true };
      } else {
        return { ...filter, active: false };
      }
    }));

    handlerFilterMovies(filterName); 
  };

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening this week</h4>
        </div>
        <div className="row">
          <ul className="filters">
            {filters.map((filter) => (
              <li
                key={filter._id}
                className={`${filter.active ? 'active' : ''}`}
                onClick={() => handleFilterClick(filter.name)}
              >
                {filter.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="row mt-5">
          {filteredMovies && filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
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
