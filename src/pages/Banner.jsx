
import React, {useState, useEffect} from 'react'
import './banner.css'
import bgImg from '../images/bg-transformer.jpg'
import tittleImg from  '../images/transformer-title.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


function Banner() {
    const [movies, setMovies] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:5173/data/movieData.json')
       .then(res => res.json())
       .then(data => setMovies(data))
       .catch(e => console.log(e.message));
    
    }

    useEffect(() => {
        fetchData()
    },[])

  return (
    <div className='banner'>
        <div className="movie">
            <img src={bgImg} alt="Background Image" className='bgImg active' />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="content active">
                            <img src={tittleImg} alt="Movie Title" className="movie-title" />
                            <h4>
                                <span>Year</span>
                                <span><i>age</i></span>
                                <span>length</span>
                                <span>gaterory</span>
                            </h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem cum ullam aliquam exercitationem unde facere sapiente laudantium dignissimos perferendis optio, architecto at? Repellat architecto ullam pariatur numquam obcaecati ut ipsum!</p>
                            <div className="button">Button</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="date active">
                        <h2>On 15 August</h2>
                    </div>
                    <div className="trailer active">
            <a href="#" className="playBtn">
                <FontAwesomeIcon icon={faPlay} size="2x" />
            </a>
        </div>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Banner