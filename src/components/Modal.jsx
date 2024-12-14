import React from 'react'
import './modal.css'
function Modal({movie,status, toggleModal}) {
  return (
    <div className={`movieModal ${ status ? 'active' : undefined}`}>
        <a href="" className="modalClose" onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
        </a>
        <iframe width="925" height="520" src={movie.video} title={`${movie.title} | Official Trailer`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Modal