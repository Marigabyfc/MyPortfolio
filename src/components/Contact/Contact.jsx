import Style from './Contact.module.css'
import React from 'react'
import { ContactModal, GitHub, linkdn, Mail, Twitter } from '../views'
import { useClick } from '../Hooks/useClick'

export default function Contact() {

  const [clicked, openModal, closeModal] = useClick(false)

  return (
    <article className={Style.contact}>
      <section className={Style.contactSection}>
        <div className={Style.contactH2}>
          <h2>Contact</h2>
          <p>Contact me if you want us to work together.</p>
        </div>
        <figure className={Style.contactImg}>
          <img src={Mail} alt="Outlook" width='90px' onClick={openModal}/>
          <ContactModal open={clicked} closeModal={closeModal}/>
          <a href="https://github.com/Marigabyfc" target='_blank'><img src={GitHub} alt="GitHub" width='160px'/></a>
          <a href="https://twitter.com/marigabyfc" target='_blank'><img src={Twitter} alt="Twitter" className={Style.twitter}/></a>
          <a href="https://www.linkedin.com/in/marigabyfc" target='_blank'><img src={linkdn} alt="Linkdn" width='120px'/></a>
        </figure>
      </section>
    </article>
  )
}
