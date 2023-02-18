import React from 'react'
import handSvg from '../../assets/hand' 
import sendSvg from '../../assets/send' 
const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Obaid Ashiq
             {handSvg}  
        </h1>
        <h3 className="home__subtitle">Front-End  Developer</h3>
        <p className="home__description">
            I am creative Developer based in India, and I am very passionate and dedicated to my work
        </p>
        <a href="#contact" className="button button--flex">Say Hello
        {sendSvg}</a>
    </div>
  )
}

export default Data