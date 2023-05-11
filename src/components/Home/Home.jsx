import Style from './Home.module.css'
import React from 'react'
import { MarigabyFoods, Promanitas } from '../views'
import foods from '../../images/MarigabyFoods.jpeg'
import promanitas from '../../images/Promanitas.png'
import { useModal } from '../Hooks/useModal'

const Home = () => {

  const [open, openModal, closeModal] = useModal(false)

  const [open2, openModal2, closeModal2] = useModal(false)

  return (
    <article className={Style.projects}>
        <h1>My Projects</h1>
      <div className={Style.container}>
        <div className={Style.divProjects}>
          <figure>
            <a href="https://foods-marigaby.netlify.app/" target="_blank"><img src={foods} alt="PI Comidas"/></a>
              <div className={Style.capa}>
                <h3>Pruebita a ver si agarra</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa blanditiis, magnam voluptate distinctio beatae exercitationem, nobis voluptatibus neque est tenetur laudantium voluptatum cumque. Tempore nemo officia dolore ea illum amet!</p>
              </div>
            </figure>
          <button onClick={openModal}>More info</button> 
        </div>
          <Promanitas open={open2} closeModal={closeModal2}>
            <h3>Pruebita</h3>
            <p>Este es el modal de Promanitas</p>
          </Promanitas> 
      <div className={Style.divProjects}>
          <figure>
            <a href="https://pro-manitas-client.vercel.app/" target="_blank"><img src={promanitas} alt="PF Promanitas"/></a>
              <div className={Style.capa}>
                <h3>Pruebita a ver si agarra</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa blanditiis, magnam voluptate distinctio beatae exercitationem, nobis voluptatibus neque est tenetur laudantium voluptatum cumque. Tempore nemo officia dolore ea illum amet!</p>
              </div>
           </figure>
        <button onClick={openModal2}>More info</button> 
      </div>
        <MarigabyFoods open={open} closeModal={closeModal}>
          <h3>Pruebita</h3>
          <p>Este es el modal de el PI de foods</p>
        </MarigabyFoods> 
      </div>
    </article>
  )
};



export default Home
