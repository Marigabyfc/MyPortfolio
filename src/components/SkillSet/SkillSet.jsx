import React, { useState  } from 'react'
import Style from './SkillSet.module.css'
import { Css, Html, Js, Sequelize, Postgre, Node, ReactJs, Redux, Ts, MySql, ArrowBackIosIcon, ArrowForwardIosIcon } from '../views'
import Slider from 'react-slick'


export default function SkillSet() {

  const images = [Css, Html, Js, Sequelize, Postgre, Node, ReactJs, Redux, Ts, MySql]
  
  const [imageIndex, setImageIndex] = useState(0); 

const NextArrow = ({onClick}) =>{
  return(
    <div className={Style.rightArrow} onClick={onClick}>
      <ArrowForwardIosIcon fontSize= 'large' className={Style.icon}/>
    </div>
  )
}

const PrevArrow = ({onClick}) =>{
  return(
    <div className={Style.leftArrow} onClick={onClick}>
      <ArrowBackIosIcon fontSize= 'large' className={Style.icon}/>
    </div>
  )
}

  const settings = {
    infinite: true,
    lazyload: true,
    speed: 700,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    beforeChange: (current, next) => setImageIndex(next)
  }
    
  return (
    <main className={Style.allSkills}>
      <div className={Style.skillsContainer}>
      <h2>My Skills</h2>
      <Slider {...settings}>
        {
          images && images.map((img, index) => (
            <figure className={index === imageIndex ? Style.activeSlide : Style.slide} >
              <img src={img} alt={img} />
            </figure>
          ))
        }
      </Slider>
      </div>
    </main> 
  )
}
