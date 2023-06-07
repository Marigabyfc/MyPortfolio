import Style from './MiddleHome.module.css'
import React from 'react'
import { useInView } from 'react-intersection-observer'
export default function MiddleHome() {

  const { ref: firstRef, inView: firstView } = useInView({triggerOnce: true})

  return (
    <article className={Style.middleHome}>
      <div ref={firstRef} className={`${Style.firstDivMid} ${firstView ? Style.firstDivMidanimation : null}`}>
        <section id={Style.sectionMid1}>
          <blockquote>
          "Creativity is intelligence having fun." <cite>- Albert Einstein</cite>
          </blockquote>
        </section>
        <section id={Style.sectionMid2}>
          <blockquote>
          "Design is not just how it looks and feels, it's how it works." <cite>- Steve Jobs</cite>
          </blockquote>
        </section>
      </div>
      <div className={`${Style.secondDivMid} ${firstView ?  Style.firstDivMidanimation : null}`}>
        <section id={Style.sectionMid3}>
          <p>"Technology is only powerful when placed in the hands of creative individuals."</p>
        </section>
        <section id={Style.sectionMid4}>
          <blockquote>
          "The best way to predict the future is to create it." <cite>- Peter Drucker</cite>
          </blockquote>
        </section>
      </div>
    </article>
  )
}
