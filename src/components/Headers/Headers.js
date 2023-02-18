import React from 'react'
import   './Header.css'
import { useState } from 'react'

const Headers = () => {
    
    const [toggle, setToggle] = useState(false)

  return (
    
    <header className="header">
        {/* <nav className={`${styles.nav} ${styles.container}`}> */}
        <nav className="nav container">

        <a href="index.html" className="nav__logo">Obaid</a>
        <div className={toggle ? "nav__menu show-menu": "nav__menu"}>
            <ul className="nav__list grid" >
                <li className="nav__item">
                    <a href="#home" className="nav__link active-link">
                        <i className="uil uil-estate nav__icon"></i>HOME
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#about" className="nav__link">
                        <i className="uil uil-user nav__icon"></i>ABOUT
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#skills" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i>SKILLS
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#services" className="nav__link">
                        <i className="uil uil-briefcase-alt nav__icon"></i>Services
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                        <i className="uil uil-scenery nav__icon"></i>PORTFOLIO
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#contact" className="nav__link">
                        <i className="uil uil-message nav__icon"></i>CONTACT
                    </a>
                </li>
            </ul>
            <i onClick={()=>{setToggle(!toggle)}} className="uil uil-times nav__close"></i>
        </div>

        <div className="nav__toggle" onClick={()=>{setToggle(!toggle)}}>
            <i className="uil uil-apps"></i>
        </div>
        </nav>
    </header>
    
  )
}

export default Headers