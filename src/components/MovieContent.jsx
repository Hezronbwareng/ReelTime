import React from 'react'
import './movieContent.css'
import tittleImg from  '../images/transformer-title.png'
import Button from './Button'


function MovieContent() {
  return (
    <div className="content active">
                            <img src={tittleImg} alt="Movie Title" className="movie-title" />
                            <h4>
                                <span>Year</span>
                                <span><i>age</i></span>
                                <span>length</span>
                                <span>gaterory</span>
                            </h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem cum ullam aliquam exercitationem unde facere sapiente laudantium dignissimos perferendis optio, architecto at? Repellat architecto ullam pariatur numquam obcaecati ut ipsum!</p>
                            <div className="button">
                                <Button icon={<ion-icon name="bookmark-outline"></ion-icon> } name="Book" color="#ff3700" bgColor="#ffffff"/>
                                <Button icon={<ion-icon name="add-outline"></ion-icon>} name="My List"/>
                            </div>
                        </div>
                    
  )
}

export default MovieContent