import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggleEduExp, setToggleEduExp] = useState(1);

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={()=>{setToggleEduExp(1)}}
            className={
              toggleEduExp === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
          onClick={()=>{setToggleEduExp(2)}}
            className={
              toggleEduExp === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil- qualification__icon"></i>
          </div>
        </div>

        <div className="qualification__sections">
          <div className={
              toggleEduExp === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Graduation</h3>
                <span className="qualification__subtitle">
                  Islamia College of Science and Commerce
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2019 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Higher Secondary</h3>
                <span className="qualification__subtitle">
                  S.P Higher Secondary School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017 - 2018
                </div>
              </div>
            </div>

            {/* ---------------------------------------- */}

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React JS</h3>
                <span className="qualification__subtitle">
                  Udemy
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Islamia College of Science and Commerce
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017 - 2018
                </div>
              </div>
            </div> */}
          </div>
          {/* =========================================== */}
          <div className={
              toggleEduExp === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fresher</h3>
                <span className="qualification__subtitle">
                  {" "}
                 Developing Projects
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Academic Project</h3>
                <span className="qualification__subtitle">ISlamia college </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022 - 2022
                </div>
              </div>
            </div>

            {/* ---------------------------------------- */}

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2018 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
