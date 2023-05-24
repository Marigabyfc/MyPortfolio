import React, { useRef, useEffect} from 'react'
import './App.css'
import {Contact, Experience, NavBar, SkillSet, Home, Landing, image1, image2, image3, image4, image5, image6, image7} from './components/views.js'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {


return (
  <article>
    <NavBar/>
   <Parallax pages={4}>
      <ParallaxLayer offset={0} speed={1.5} className='backgroundLayer'/>
      <ParallaxLayer offset={0} speed={0.8}>
        <Landing/>
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
        <Home/>
      </ParallaxLayer>

      <ParallaxLayer  offset={2} speed={0.5}>
        <figure>
         <img src={image4} alt=""/>
        </figure>
      </ParallaxLayer>

      
      <ParallaxLayer  offset={2} speed={1}>
        <figure>
         <img src={image5} alt=""/>
        </figure>
      </ParallaxLayer>
     
      <ParallaxLayer  offset={2} speed={0.5}>
        <figure>
         <img src={image6} alt=""/>
        </figure>
      </ParallaxLayer>
     
      <ParallaxLayer  offset={2} speed={1}>
        <figure>
         <img src={image7} alt=""/>
        </figure>
      </ParallaxLayer>

        <ParallaxLayer  offset={2} speed={1}>
          <Contact/>
        </ParallaxLayer>

        <ParallaxLayer  offset={3} speed={1}>
          <Experience/>
        </ParallaxLayer>
        
    </Parallax>

  </article>

  )
}

export default App
