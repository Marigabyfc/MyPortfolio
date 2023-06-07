import Style from './Experience.module.css'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { vnet, henry } from '../views'

export default function Experience() {

  const { ref : firstRef, inView: firstView } = useInView({triggerOnce: true})
  const { ref : secondRef, inView: secondView } = useInView({triggerOnce: true})

  return (
    <article id='experience' className={Style.experience}>
      <section ref={firstRef} className={`${Style.firstSection} ${firstView ? Style.expAnimated : ''}`}>
        <div>
          <h2>Sales Consultant <span>(Dec 2021- Oct 2022)</span></h2>
        </div>
          <div className={`${Style.column} ${firstView ? Style.columnAnimated : ''}`}>
        <span className={Style.companies}>Vnet</span>
        <p className={Style.paragraphExp}>(Fiber Optic Internet Service)</p>
        <ul>
          <li>2nd place as top sales advisor</li>
          <li>Company-paid training in commercial advising and public relations management</li>
          <li>Supervision of installation and construction teams under my guidance</li>
        </ul>
          <a href="https://www.vnet.com.ve/" target='_blank'><button>Visit Website</button></a>
          </div>
      </section>
      {/* <div className={Style.firstFigureDiv}>
            <figure className={Style.firstFigure}>
              <img src={vnet} alt="" />
            </figure>
      </div> */}
      <section  ref={secondRef} className={`${Style.secondSection} ${secondView ? Style.expAnimated2 : ''}`}>
        <div>
          <h2>Teaching Assistant <span>(Feb 2023- Apr 2023)</span></h2>
        </div>
          <div className={`${Style.column} ${secondView ? Style.columnAnimated2 : ''}`}>
        <span className={Style.companies}>Henry</span>
        <ul>
          <li>Lead and coordinate a group of students with the goal of achieving their program adaptation</li>
          <li>Assist in solving exercises and promote group collaboration (Pair Programming).</li>
          <li>Promote group cohesion and community building</li>
          <li>Soft Skills training</li>
        </ul>
        <a href="https://www.soyhenry.com/" target='_blank'><button>Visit Website</button></a>
          </div>
      </section>
      {/* <div className={Style.secondFigureDiv}>
          <figure className={Style.secondFigure}>
            <img src={henry} alt="" />
          </figure>
      </div> */}
    </article>
  )
}
