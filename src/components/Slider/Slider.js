import React from 'react'
import './Slider.scss'

import Light from 'assets/images/slider-pendant-lighting-alt.jpg'
import Basket from 'assets/images/slider-basket-alt.jpg'
import Clock from 'assets/images/slider-wall-clock-alt.jpg'

function Slider() {
  return (
    <section className='slide'>
      <div className='slide__container'>
        <div className='slider__item'>
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
        <div className='slider__item'>
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
        <div className='slider__item'>
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
      </div>
    </section>
  )
}

export default Slider
