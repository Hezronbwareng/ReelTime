import React from 'react'
import './movieSwipper.css'

//Import Swipper React component
import { Swiper, SwiperSlide } from 'swiper/react'

//import Swipper styles 
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { Autoplay, EffectCoverflow } from 'swiper/modules';

function MovieSwipper({slides}) {
  return (
  <Swiper 
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  autoplay={{delay: 2500, disableOnInteraction:false}}
  coverflowEffect={{
    rotate:50,
    stretch: 0,
    depth:100,
    modifier:1,
    slideShadows:true,

  }}
  loop={true}
  modules={[Autoplay, EffectCoverflow]}
  className='movieSwipper' >
    {
        slides.map(slide => (
            <SwiperSlide>
            <img src={slide.previewImg} alt="Preview Image" />
           </SwiperSlide>

        ))
    }
 


  </Swiper>
  )
}

export default MovieSwipper