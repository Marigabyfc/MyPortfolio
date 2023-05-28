import Style from './MiddleLanding.module.css'
import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function MiddleLanding() {

    const { ref : firstRef, inView: firstView } = useInView({triggerOnce: true})

  return (
    <article className={Style.middleArticle}>
      <section ref={firstRef} className={`${Style.welcome} ${firstView ? Style.welAnimated : ''}`}>
        <h3>Welcome</h3>
        <p>to my Portfolio, I hope you enjoy..</p>
        <div>
          <i>- "Like a digital architect, I design and construct robust web structures where each line of code is a brick that brings a unique experience to life."</i>
        </div>
      </section>
    </article>
  )
}
