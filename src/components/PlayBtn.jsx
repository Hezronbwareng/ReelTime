import './playBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import { useState } from 'react';

function PlayBtn({ movie }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div
        className={`trailer d-flex align-items-center justify-content-center ${
          movie.active ? 'active' : undefined
        }`}
      >
        <a href="#" className="playBtn" onClick={toggleModal}>
          <FontAwesomeIcon icon={faPlay} size="2x" className="icon" />
        </a>
        <p>Watch Trailer</p>
      </div>
      {movie.active && <Modal movie={movie} status={modal} toggleModal={toggleModal} />}
    </>
  );
}

export default PlayBtn;
