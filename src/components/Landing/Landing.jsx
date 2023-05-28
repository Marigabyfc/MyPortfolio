import Style from './Landing.module.css'
import React from 'react'
import { resume } from '../views'
import { useInView } from 'react-intersection-observer';
export default function Landing() {

  const { ref: firstRef, inView: firstView } = useInView()

  const { ref: secondRef, inView: secondView } = useInView({triggerOnce: true})
  
  const handleDownload = () => {
    // Lógica para generar o obtener la URL del archivo PDF
    const fileUrl = 'https://drive.google.com/file/d/1KoxlXBd4_5-Upqj82CEc574p9u9FmngA/view?usp=sharing';

    // Crea un enlace temporal y dispara la descarga
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'archivo.pdf';
    link.target = '_blank'
    link.click();
  };
  
  return (
    <header className={Style.landing}>
      <article>
        <div className={Style.landingDiv}>
          <div ref={firstRef} className={firstView ? Style.viewLanding : ''}>
            <h1>Hello, I'm Mariana.</h1>
            <h2>I'm a <span>Full Stack Web Developer.</span></h2>
          </div>
            <section ref={secondRef} className={secondView ? Style.viewSectionLanding : ''}>
              <div>
                <p>
                I have 8 months of experience in web development, specializing in<strong>React</strong>and<strong>Node.js</strong>. 
                </p>
              </div>
              <div>
                <p>
                  With<strong>perseverance,</strong><strong>patience,</strong>and a<strong>great vision,</strong>I transform lines of code into solutions that bring to life my passion for programming.
                </p>
              </div>
              <div className={Style.divButton}>
              <button onClick={handleDownload}><img src={resume} alt="resume" width='50px'/></button>
              </div>
            </section>
          </div>
        <br />
        <br />
          <hr />
      </article>   
    </header>
  )
}
