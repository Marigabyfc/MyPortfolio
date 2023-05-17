import Style from './Home.module.css'
import React from 'react'
import { MarigabyFoods, Promanitas } from '../views'
import foods from '../../images/MarigabyFoods.jpeg'
import promanitas from '../../images/Promanitas.png'
import { useClick } from '../Hooks/useClick'
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  
  const [clicked, openModal, closeModal] = useClick(false)

  const [clicked2, openModal2, closeModal2] = useClick(false)

  return (
    <article className={Style.projects}>
        <h1>My Projects</h1>
      <div className={Style.container}>
        <div className={Style.divProjects}>
          <figure>
            <a href="https://foods-marigaby.netlify.app/" target="_blank"><img src={foods} alt="PI Comidas"/></a>
              <div className={Style.capa}>
                  <SearchIcon className={Style.searchIcon}/>
                  <p>Can you take a look at my Foods project? This is my first personal project where I put all the knowledge acquired during my studies at Henry.</p>
              </div>
            </figure>
            <hr />
          <button onClick={openModal}>More info</button> 
        </div>
          <MarigabyFoods open={clicked} closeModal={closeModal}>
            <h3>Pruebita</h3>
            <p>Este es el modal de el PI de foods</p>
          </MarigabyFoods> 
      <div className={Style.divProjects}>
          <figure>
            <a href="https://pro-manitas-client.vercel.app/" target="_blank"><img src={promanitas} alt="PF Promanitas"/></a>
              <div className={Style.capa}>
                  <SearchIcon className={Style.searchIcon}/>
                  <p>Can you take a look at my second project Promanitas? My first group project where 8 Full-Stack Web developers collaborated to create an express job board.</p>
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
