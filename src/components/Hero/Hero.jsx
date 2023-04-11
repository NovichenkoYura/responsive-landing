import React from 'react'
import './hero.scss'
import slider from '../../images/slider.png'


export const Hero = () => {
  return (
    <div className='hero-c center'>
      <img src={slider} alt="" className='hero-slider' />
      <div className='max1170 flexJustifyEnd'>
        <div className="flexColumnJustifyStart hero-content">
          <h1 className="hero-title">
            Motor-sadas asd 
          </h1>
          <p className='hero-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis architecto esse doloribus labore quae recusandae. Accusantium unde adipisci inventore? Veritatis inventore fugit nulla harum aspernatur labore, reprehenderit voluptas fugiat!
          </p>
          <button className='hero-button'>DOWNLOAD</button>
          </div>
      </div>
    </div>
  )
}
