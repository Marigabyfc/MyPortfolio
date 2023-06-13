import Style from './Contact.module.css'
import React from 'react'
import { ContactModal, GitHub, linkdn, Mail, Twitter } from '../views'
import { useClick } from '../Hooks/useClick'
import { useInView } from 'react-intersection-observer'

export default function Contact() {

  const { ref : firstRef, inView: firstView } = useInView({triggerOnce: true})

  const [clicked, openModal, closeModal] = useClick(false)

  return (
    <article id='contact' className={Style.contact}>
      <section className={Style.contactSection}>
        <div ref={firstRef} className={`${Style.contactH2} ${firstView ? Style.contactA : ''}`}>
          <h2>Contact</h2>
          <p>Don't be a stranger, connect with me online👋. Or contact me if you want us to work together.</p>
        </div>
        <figure  className={`${Style.contactImg} ${firstView ? Style.imgAnimation : ''}`}>
          <img id={Style.img1} src={Mail} alt="Outlook"  onClick={openModal}/>
          <ContactModal open={clicked} closeModal={closeModal}/>
          <a href="https://github.com/Marigabyfc" target='_blank'><img id={Style.img2} src={GitHub} alt="GitHub" /></a>
          <a href="https://twitter.com/marigabyfc" target='_blank'><img id={Style.img3} src={Twitter} alt="Twitter" className={Style.twitter}/></a>
          <a href="https://www.linkedin.com/in/marigabyfc" target='_blank'><img id={Style.img4} src={linkdn} alt="Linkdn" /></a>
        </figure>
      </section>
    </article>
  )
}
