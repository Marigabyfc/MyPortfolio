import React from 'react'
import './App.css'
import {Contact, Experience, NavBar, SkillSet, Home, Landing, image1, image2, 
  image4, image5, image6, image7, image8, image9, image11, image12, image13, image14, image15, MiddleLanding} from './components/views.js'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useInView } from 'react-intersection-observer'

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

      <ParallaxLayer offset={0.95} speed={1.2}>
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
     
      {/* <ParallaxLayer  offset={1.95} speed={0.8}>
        <img src={image11} alt="" />
      </ParallaxLayer>
     
      <ParallaxLayer  offset={1.95} speed={1}>
        <img src={image12} alt="" />
      </ParallaxLayer> */}

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
        </ParallaxLayer>
        
        <ParallaxLayer  offset={2.95} speed={1.2}>
          <img src={image14} alt="" />
        </ParallaxLayer>
        
        <ParallaxLayer  offset={2.95} speed={1.4}>
          <img src={image15} alt="" />
        </ParallaxLayer> */}


        <ParallaxLayer  offset={3} speed={1}>
          <Experience/>
        </ParallaxLayer>

        <ParallaxLayer  offset={4} speed={1}>
          <SkillSet/>
        </ParallaxLayer>
        
    </Parallax>

  </article>

  )
}

export default App
