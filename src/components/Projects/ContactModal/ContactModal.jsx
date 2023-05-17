import Style from './ContactModal.module.css'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { SendIcon, BusinessCenterIcon, MailIcon, LocationCityIcon, Swal, VITE_PUBLIC_KEY, VITE_SERVICE_ID, VITE_TEMPLATE_ID } from '../../views';


export default function ContactModal({open, closeModal}) {
  
  const [newForm, setNewForm] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setNewForm({
      ...newForm,
      [e.target.name] : e.target.value
    })
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, VITE_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            title: `Your message have been sent!`,
            icon: 'success'
          })
          setNewForm({
            user_name: '',
            user_email: '',
            subject: '',
            company: '',
            message: ''
          })
          closeModal()
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            title: `Something happened! ${error.text}`,
            icon: 'error'
          })
      });
  };


  return (
     <article className={open ? Style.contactModal : Style.isClose}>
        <section className={Style.isOpen}>
            <div className={Style.firstDiv}>
              <div className={Style.divForm}>
                <h2>Contact <span>me</span></h2>
                <form ref={form} onSubmit={sendEmail}>
                  <p>
                    <label htmlFor="name">Fullname</label>
                    <input type="text" name="user_name" required value={newForm.user_name} onChange={handleChange}/>
                  </p>
                  <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="user_email" required value={newForm.user_email} onChange={handleChange}/>
                  </p>
                  <p>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" value={newForm.subject} onChange={handleChange}/>
                  </p>
                  <p>
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" placeholder='Optional..' value={newForm.company} onChange={handleChange}/>
                  </p>
                  <p className={Style.block}>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="3" required value={newForm.message} onChange={handleChange}></textarea>
                  </p>
                  <p className={Style.block}>
                    <button type='submit' value="Send"><SendIcon/> Send</button>
                  </p>
                </form>
              </div>
                <div className={Style.secondDiv}>
                  <h4>More Info</h4>
                    <ul className={Style.ulDiv}>
                      <div>
                      <BusinessCenterIcon/>
                      <li>Full Stack Web Developer</li>
                      </div>
                      <div>
                      <LocationCityIcon/>
                      <li>Argentina, Buenos Aires, CABA</li>
                      </div>
                      <div>
                        <MailIcon/>
                      <li>marianag_flores@hotmail.com</li>
                      </div>
                    </ul>
                    <p>Hi! My name is Mariana Flores, and it's a pleasure to have you here at this stage of my portfolio. We can get in touch by leaving your contact information and message, which will be sent to my email. I'll be happy to respond.</p>
                </div>
            </div>
        </section>
          <button onClick={closeModal}>X</button>
     </article> 
  )
}
