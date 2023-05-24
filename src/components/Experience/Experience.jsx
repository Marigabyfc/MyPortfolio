import Style from './Experience.module.css'
import React, { useEffect } from 'react'
// import { useSpring, animated } from '@react-spring/web'}
import { useSpring, animated } from "@react-spring/web";


export default function Experience() {

  return (
    <article className={Style.experience}>
      <section className={Style.firstSection}>
        <div>
          <h2>Sales Consultant <span>(Dec 2021- Oct 2022)</span></h2>
        </div>
          <div className={Style.column}>
        <span className={Style.companies}>Vnet</span>
        <p className={Style.paragraphExp}>(Fiber Optic Internet Service)</p>
        <ul>
          <li>2nd place as top sales advisor</li>
          <li>Company-paid training in commercial advising and public relations management</li>
          <li>Supervision of installation and construction teams under my guidance</li>
        </ul>
          <a href="https://www.vnet.com.ve/" target='_blank'><button>See Website</button></a>
          </div>
      </section>
      <section className={Style.secondSection}>
        <div>
          <h2>Teaching Assistant <span>(Feb 2023- Apr 2023)</span></h2>
        </div>
          <div className={Style.column}>
        <span className={Style.companies}>Henry</span>
        <ul>
          <li>Lead and coordinate a group of students with the goal of achieving their program adaptation</li>
          <li>Assist in solving exercises and promote group collaboration (Pair Programming).</li>
          <li>Promote group cohesion and community building</li>
          <li>Soft Skills training</li>
        </ul>
        <a href="https://www.soyhenry.com/" target='_blank'><button>See Website</button></a>
          </div>
      </section>
    </article>
  )
}
