import React from 'react'
import scrollSvg from "../../assets/scroll"

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button-flex">
            {scrollSvg}
            <span className='home__scroll-name'>Scroll Down</span>
            <i className='uil uil-arrow-down home__scroll-arrow'></i>
        </a>
    </div>
  )
}

export default ScrollDown