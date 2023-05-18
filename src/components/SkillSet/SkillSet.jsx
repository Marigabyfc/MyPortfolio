import React from 'react'
import Style from './SkillSet.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Css, Html, Js, Sequelize, Postgre, Node, NodeJs, ReactJs, Redux, Ts, MySql } from '../views'


export default function SkillSet() {

  return (
    <main className={Style.allSkills}>
      <div className={Style.skillsContainer}>
        <h2>My Skills</h2>
      <Swiper
        effect={'fade'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'2'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: Style.swiper_pagination, clickable: true }}
        navigation={{
          nextEl: Style.swiper_button_next,
          prevEl: Style.swiper_button_prev,
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={Style.swiper_container}
      >
      <SwiperSlide className={Style.swiper_slide}>
          <img src={Css} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Html} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Js} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Node} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ReactJs} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Redux} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Postgre} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ts} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MySql} alt="slide_image"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sequelize} alt="slide_image"/>
        </SwiperSlide>

        <div className={Style.slider_controler}>
          <div className={Style.swiper_button_prev}>
            <ion-icon name="{arrow-back-outline}"></ion-icon>
          </div>
          <div className={Style.swiper_button_next}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className={Style.swiper_pagination}></div>
        </div>
      </Swiper>
      </div>
    </main>
  )
}
