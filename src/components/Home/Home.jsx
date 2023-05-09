import Style from './Home.module.css'
import React from 'react'
import { MarigabyFoods, Promanitas } from '../views'
import foods from '../../images/MarigabyFoods.jpeg'
import promanitas from '../../images/Promanitas.png'

const Home = () => {
  return (
    <article className={Style.projects}>
      <figure>
      <a href="https://foods-marigaby.netlify.app/" target="_blank"><img src={foods} alt="PI Comidas" width='400px' height='300px'/></a>
      <button >More info</button>
      </figure>
      <figure>
      <a href="https://pro-manitas-client.vercel.app/" target="_blank"><img src={promanitas} alt="PF Promanitas" width='400px' height='300px'/></a>
      <button >More info</button>
      </figure>
    </article>
  )
};



export default Home
