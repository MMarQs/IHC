import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import camera_icon from '../Assets/camera_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <div>
                <h2>NEW RELEASES ONLY</h2>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={camera_icon} alt=''/>
                </div>
                <p>movies</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <Link to="/movies">
                    <a href='/movies'>Search movies</a>
                    <img src={arrow_icon} alt=''/>
                </Link>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_img} alt=''/>
        </div>
    </div>
  )
}

export default Hero