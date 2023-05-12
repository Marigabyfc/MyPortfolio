import Style from './ContactModal.module.css'
import React from 'react'

export default function ContactModal({open, closeModal}) {
  return (
     <article className={open ? Style.contactModal : Style.isClose}>
        <section className={Style.isOpen}>
            <div className={Style.firstDiv}>
              <div>
                <h3>Contact me</h3>
              </div>
                <form>
                  <p>
                    <label htmlFor="name">Fullname</label>
                    <input type="text" name="name"/>
                  </p>
                  <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                  </p>
                  <p>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject"/>
                  </p>
                  <p>
                    <label htmlFor="message">Message</label>
                    <input type="text" name="message"/>
                  </p>
                </form>
            </div>
            <div className={Style.secondDiv}>
              <h4>More Info</h4>
                <ul>
                  <li>Argentina, Buenos Aires, CABA</li>
                  <li>Full Stack Web Developer</li>
                  <li></li>
                </ul>
            </div>
          <button onClick={closeModal}>X</button>
        </section>
     </article> 
  )
}
