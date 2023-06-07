import React from 'react'
import './App.css'
import {Contact, Experience, NavBar, SkillSet, Home, Landing, /* image1, image2, 
  image4, image5, image6, image7, image8, image9, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, */ MiddleLanding, MiddleHome, MiddleContact, Footer} from './components/views.js'
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import { useInView } from 'react-intersection-observer'
import image1 from './images/parallax/acolor.png'
import image2 from './images/parallax/acolorOver.png'
import image4 from './images/parallax/contactOver.png'
import image5 from './images/parallax/contactBack.png'
// import image6 from '../images/parallax/figuritas.png'
// import image7 from '../images/parallax/figuritas2.png'
import image8 from './images/parallax/landingmedio.png'
import image9 from './images/parallax/landingmedioOver.png'
import image11 from './images/parallax/homemedio.png'
import image12 from './images/parallax/homemedioOver.png'
// import image13 from './images/parallax/contactmedioBack.png'
import image14 from './images/parallax/contactmedio.png'
import image15 from './images/parallax/contactmedioOver.png'
import image16 from './images/parallax/experience.png'
import image17 from './images/parallax/experience2.png'
import image18 from './images/parallax/experience3.png'
import image19 from './images/parallax/experience4.png'
import image20 from './images/parallax/setskill.png'
import image21 from './images/parallax/setskill2.png'
import image22 from './images/parallax/setskill3.png'
import image23 from './images/parallax/setskill4.png'

function App() {

  const { ref : firstRef, inView: firstView } = useInView({triggerOnce: true})

  const { ref : secondRef, inView: secondView } = useInView({triggerOnce: true})

  const { ref : thirdRef, inView: thirdView } = useInView()
  
  
return (
  <article >
    <NavBar/>
   <Parallax pages={5}>
      <ParallaxLayer offset={0} speed={1.5} className='backgroundLayer'/>
      <ParallaxLayer offset={0} speed={0.8}>
        <Landing/>
      </ParallaxLayer>

      <ParallaxLayer offset={0.90} speed={0.8}>
        <img src={image8} alt="" />
      </ParallaxLayer>  
    
      <ParallaxLayer offset={0.85} speed={1.2}>
        <img src={image9} alt="" />
      </ParallaxLayer>  

      <ParallaxLayer offset={0.95} speed={1.5}>
        <MiddleLanding/>
      </ParallaxLayer>  
      
      <ParallaxLayer offset={1} speed={1}>
        <figure>
         <img src={image1} alt=""/>
        </figure>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.5}>
        <figure>
         <img src={image2} alt=""/>
        </figure>
      </ParallaxLayer>
      
      <ParallaxLayer  offset={1} speed={1}>
        <div ref={firstRef} className={firstView ? 'inViewHome' : ''}>
        <Home/>
        </div>
      </ParallaxLayer>
           
      <ParallaxLayer  offset={1.95} speed={1} className='pruebita'>
        <img src={image11} alt=""  />
      </ParallaxLayer>
     
      <ParallaxLayer  offset={1.95} speed={0.8}  className='pruebita'>
        <img src={image12} alt="" />
      </ParallaxLayer>

       <ParallaxLayer  offset={1.95} speed={1} className='pruebita'>
        <div>
        <MiddleHome />
        </div>
      </ParallaxLayer>

      <ParallaxLayer  offset={2} speed={0.5}>
        <figure>
         <img src={image4} alt=""/>
        </figure>
      </ParallaxLayer>

      
      <ParallaxLayer  offset={2} speed={0.8}>
        <figure>
         <img src={image5} alt=""/>
        </figure>
      </ParallaxLayer>
     

        <ParallaxLayer  offset={2} speed={1}>
        <div ref={secondRef} className={secondView ? 'inViewContact' : ''}>
          <Contact/>
        </div>
        </ParallaxLayer>
        

        {/* <ParallaxLayer  offset={2.95} speed={1}>
          <img src={image13} alt="" />
        </ParallaxLayer> */}
        
        <ParallaxLayer  offset={2.95} speed={1.8}>
          <img src={image14} alt="" />
        </ParallaxLayer>
        
        <ParallaxLayer  offset={2.95} speed={2}>
        <img src={image15} alt="" />
      </ParallaxLayer>

        <ParallaxLayer  offset={2.95} speed={1}>
          <MiddleContact/>
        </ParallaxLayer> 


        <ParallaxLayer  offset={3.25} speed={1.5}>
          <img src={image16} alt="" />
        </ParallaxLayer>

        <ParallaxLayer  offset={3.25} speed={1}>
          <img src={image17} alt="" />
        </ParallaxLayer>

        <ParallaxLayer  offset={3.25} speed={0.8}>
          <img src={image18} alt="" />
        </ParallaxLayer>

        <ParallaxLayer  offset={3.25} speed={1.5}>
          <img src={image19} alt="" />
        </ParallaxLayer>

        <ParallaxLayer  offset={3.25} speed={0}>
          <img src={image20} alt="" />
        </ParallaxLayer>

        <ParallaxLayer  offset={3.25} speed={0.2}>
          <img src={image23} alt="" />
        </ParallaxLayer>

        <ParallaxLayer  offset={3.25} speed={1}>
          <Experience/>
        </ParallaxLayer>

        <ParallaxLayer  offset={4} speed={1.5}>
          <img src={image21} alt="" />
        </ParallaxLayer>

        <ParallaxLayer  offset={4} speed={2}>
          <img src={image22} alt="" />
        </ParallaxLayer>

        <ParallaxLayer  offset={4} speed={1}>
          <SkillSet/>
        </ParallaxLayer>
        
        <ParallaxLayer  offset={4.85} speed={1} >
          <Footer/>
        </ParallaxLayer>
        
    </Parallax>

  </article>

  )
}

export default App
