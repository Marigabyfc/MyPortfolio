import Style from './Contact.module.css'
import React from 'react'
import { ContactModal, GitHub, linkdn, Mail, Twitter } from '../views'
import { useClick } from '../Hooks/useClick'

export default function Contact() {

  const [clicked, openModal, closeModal] = useClick(false)

  return (
    <article className={Style.contact}>
      <section>
        <div>
          <h2>Contact</h2>
          <p>Contact me if you want us to work together.</p>
        </div>
        <figure className={Style.contactImg}>
          <abbr title="Puedes tomar mis datos mediante un formulario haciendo click en el icono"><img src={Mail} alt="Outlook" width='90px' onClick={openModal}/></abbr>
          <ContactModal open={clicked} closeModal={closeModal}/>
          <a href="https://github.com/Marigabyfc" target='_blank'><img src={GitHub} alt="GitHub" width='160px'/></a>
          <a href="" target='_blank'><img src={Twitter} alt="Twitter" width='90px'/></a>
          <a href="https://www.linkedin.com/in/marigabyfc" target='_blank'><img src={linkdn} alt="Linkdn" width='120px'/></a>
        </figure>
      </section>
    </article>
  )
}
