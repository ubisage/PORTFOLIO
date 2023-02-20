import React from 'react'
import "./about.css"
import AboutImg from "../../assets/profile.jpg"
import CV from "../../assets/Obaid-Resume.pdf";
import Info from './Info';
import FileSvg from "../../assets/files.js"

const About = () => {
  return (
    <section className='about section' id='about' >
        <h2 className="section__title">About ME</h2>
        <span className="section__subtitle">My Intro</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="Obaid Ashiq" className="about__img" />
            <div className="about__data">
                <Info/>

                <p className="about__description">Front-end Developer, I am a Fresher and I create dynamic web pages that provide good User Interface . </p>
                <a href={CV} className="button button--flex" download >Download CV {FileSvg}</a>
            </div>
        </div>
    </section>
  )
}

export default About