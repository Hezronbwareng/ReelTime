import React, { useState, useEffect } from 'react';
import './banner.css';

import MovieContent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';
import PlayBtn from '../components/PlayBtn';
import MovieSwipper from '../components/MovieSwipper';

function Banner() {
    const [movies, setMovies] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:5173/data/movieData.json')
            .then((res) => res.json())
            .then((data) => setMovies(data))
            .catch((e) => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSlideChange = (id) => {
        const updatedMovies = movies.map((movie) => ({
            ...movie,
            active: movie._id === id, // Set active state
        }));
        setMovies(updatedMovies);
    };

    return (
        <div className="banner">
            {movies &&
                movies.length > 0 &&
                movies.map((movie) => (
                    <div className="movie" key={movie._id}>
                        <img
                            src={movie.bgImg}
                            alt={`Background for ${movie.title}`}
                            className={`bgImg ${movie.active ? 'active' : ''}`}
                        />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <MovieContent movie={movie} />
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <MovieDate movie={movie} />
                                    <PlayBtn movie={movie} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            {movies && movies.length > 0 && (
                <MovieSwipper slides={movies} slideChange={handleSlideChange} />
            )}
        </div>
    );
}

export default Banner;
