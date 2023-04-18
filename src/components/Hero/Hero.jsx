import React from 'react'
import './hero.scss'
import slider from '../../images/slider.png'


export const Hero = () => {
  return (
    <div className='hero-c center header_elem'  title='top' id="hero">
      <img src={slider} alt="" className='hero-slider' />
      <div className='max1170 flexJustifyEnd hero-g-c-body'>
        <div className='hero-global-content flexJustifyEnd'>
        <div className="flexColumnJustifyStart hero-content">
          <h1 className="hero-title">
          Moto All solution Head
          </h1>
          <p className='hero-text'>
          Nulla aliquet, erat a egestas lacinia, leo libero dapibus nisl, quis pulvinar dolor justo
								id turpis. Nulla odio orci.
          </p>
          <button className='hero-button'>DOWNLOAD</button>
          </div>
          </div>
      </div>
    </div>
  )
}
