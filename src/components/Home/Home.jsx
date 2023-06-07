import Style from './Home.module.css'
import React, {useState} from 'react'
import { MarigabyFoods, Promanitas } from '../views'
import { foods, promanitas } from '../views'
import { useClick } from '../Hooks/useClick'
import SearchIcon from '@mui/icons-material/Search';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  
  const { ref: firstRef, inView: firstInView } = useInView({ 
    triggerOnce: true
  });

  const { ref: secondRef, inView: secondInView } = useInView({ 
    triggerOnce: true
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({ 
    triggerOnce: true
  });

  const { ref: fourthRef, inView: fourthInView } = useInView(/* { 
    triggerOnce: true
  } */);

  const [clicked, openModal, closeModal] = useClick(false)

  const [clicked2, openModal2, closeModal2] = useClick(false)

  return (
    <article id='home' className={Style.projects}>
        <h1 ref={thirdRef} className={thirdInView ? Style.appear : ''}>My Projects</h1>
      <div className={Style.container}>
        <div ref={firstRef} className={`${Style.divProjects} ${firstInView ? Style.marigabyFoods : ''}`}>
          <figure>
           <img src={foods} alt="PI Comidas"/>
              <div className={Style.capa}>
                <a href="https://foods-marigaby.netlify.app/" target="_blank">
                  <SearchIcon className={Style.searchIcon}/>
                  <p>Can you take a look at my Foods project? This is my first personal project where I put all the knowledge acquired during my studies at Henry.</p>
                </a>
              </div>
            </figure>
            <hr />
          <button onClick={openModal}>More info</button> 
        </div>
          <MarigabyFoods open={clicked} closeModal={closeModal}>
            <h3>Pruebita</h3>
            <p>Este es el modal de el PI de foods</p>
          </MarigabyFoods> 
      <div ref={secondRef} className={`${Style.divProjects} ${secondInView ? Style.promanitas  : ''}`}>
          <figure>
            <img src={promanitas} alt="PF Promanitas"/>
              <div className={Style.capa}>
                  <a href="https://pro-manitas-client.vercel.app/" target="_blank">
                    <SearchIcon className={Style.searchIcon}/>
                    <p>Can you take a look at my second project Promanitas? My first group project where 8 Full-Stack Web developers collaborated to create an express job board.</p>
                  </a>
              </div>
           </figure>
            <hr />
        <button onClick={openModal2}>More info</button> 
      </div>
          <Promanitas open={clicked2} closeModal={closeModal2}>
            <h3>Pruebita</h3>
            <p>Este es el modal de Promanitas</p>
          </Promanitas> 
      </div>
    </article>
  )
};



export default Home
