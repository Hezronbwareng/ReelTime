import React, { useState } from 'react';
import Schedule from './Schedule';
import './main.css';
import Trend from './Trend';
import MovieReviews from './MovieReviews';

function Main() {
   
    return (
        <>
            <Schedule />
            <Trend />            
            <MovieReviews />
        </>
    );
}

export default Main;
