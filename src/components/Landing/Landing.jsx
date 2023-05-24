import Style from './Landing.module.css'
import React from 'react'
import { resume } from '../views'

export default function Landing() {

  const handleDownload = () => {
    // Lógica para generar o obtener la URL del archivo PDF
    const fileUrl = 'https://drive.google.com/file/d/1KoxlXBd4_5-Upqj82CEc574p9u9FmngA/view?usp=sharing';

    // Crea un enlace temporal y dispara la descarga
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'archivo.pdf';
    link.click();
  };
  
  return (
    <header className={Style.landing}>
      <article>
        <div className={Style.landingDiv}>
          <div>
            <h1>Hello, I'm Mariana.</h1>
            <h2>I'm a <span>Full Stack Web Developer.</span></h2>
          </div>
            <section>
              <div>
                <p>
                I have 1 year of experience in web development, specializing in<strong>React</strong>and<strong>Node.js</strong>. 
                </p>
              </div>
              <div>
                <p>
                  I value<strong>clarity,</strong><strong>empathy,</strong>and<strong>integrity</strong>above all else. These ideals guide 
                  my approach to problem solving and life in general
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
