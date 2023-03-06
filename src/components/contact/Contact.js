import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import sendSvg from "../../assets/send"

const Contact = () => {
  //     const test = async()=>{
  //         const userId = await ig.user.getIdByUsername('username');
  // const thread = ig.entity.directThread([userId.toString()]);
  // await thread.broadcastText('Message from node');
  //     }

  // ========code related to emailJS=========== 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qub2iny', 'template_pjjl3vn', form.current, 'NY9fF_YUiLw-0QuXG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  // ==========================================

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact ME</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">user@gmail.com</span>

              <a
                href="mailto:obaiduzair822@gmail.com"
                target={"_blank"}
                rel="noreferrer"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91-9103342917</span>

              <a
                href="https://api.whatsapp.com/send?phone=919103342917&text=Hello"
                target={"_blank"}
                rel="noreferrer"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-instagram contact__card-icon"></i>
              {/* <h3 onClick={test()} className="contact__card-title">Instagram</h3> */}
              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">ubisage</span>

              <a
                href="https://www.instagram.com/direct/t/340282366841710300949128149355781036364"
                target={"_blank"}
                rel="noreferrer"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">
                Project
              </label>
              <textarea name="project"  cols="30" rows="10" className="contact__form-input" placeholder="Write your project"></textarea>
            </div>

            <button href="#contact" className="button button--flex">Send
        {sendSvg}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
