import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from "swiper";

import './Slider.scss'
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import Light from 'assets/images/slider-pendant-lighting-alt.jpg'
import Basket from 'assets/images/slider-basket-alt.jpg'
import Clock from 'assets/images/slider-wall-clock-alt.jpg'

function Slider() {

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      loop={true}
      className="slide"
      id="slide"
    >
      <div className="slide__container">
        <SwiperSlide>
          <div className='slide__item'>
            <div className='slide__image'>
              <img src={Light} alt='' />
            </div>
            <div className='slide__content'>
              <h2 className='slide__title'>Contemporary Pendant Lighting</h2>
              <a href='!#' className='slide__button'>
                Interior
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide__item'>
            <div className='slide__image'>
              <img src={Basket} alt='' />
            </div>
            <div className='slide__content'>
              <h2 className='slide__title'>Contemporary Pendant Lighting</h2>
              <a href='!#' className='slide__button'>
                Interior
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide__item'>
            <div className='slide__image'>
              <img src={Clock} alt='' />
            </div>
            <div className='slide__content'>
              <h2 className='slide__title'>Contemporary Pendant Lighting</h2>
              <a href='!#' className='slide__button'>
                Interior
              </a>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  )
}

export default Slider
