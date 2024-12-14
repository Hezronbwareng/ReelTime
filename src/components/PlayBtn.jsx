import React from 'react'
import './playBtn.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
function PlayBtn({movie}) {
  return (
    <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : undefined}`}>
    <a href="#" className="playBtn">
        <FontAwesomeIcon icon={faPlay} size="2x" className='icon' />
    </a>
    <p>Watch Trailer</p>
</div>
  )
}

export default PlayBtn