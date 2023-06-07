import Style from './MiddleContact.module.css'
import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function MiddleContact() {

  const { ref : firstRef, inView: firstView } = useInView( {triggerOnce: true} )

  const { ref : secondRef, inView: secondView } = useInView({triggerOnce: true})

  const { ref : thirdRef, inView: thirdView } = useInView({triggerOnce: true})

  return (
    <article className={Style.middleContact}>
     <div>
        <section ref={firstRef} className={firstView ? Style.animationMiddleC : null}>
          <h3>My Meaning of quality? 🏃‍♀️ ✔️</h3>
          <p>Quality is synonymous with excellence in everything I do, whether it's work or in my everyday life. It means paying attention to details, and constantly seeking improvement. Quality involves setting high standards and making sure to meet them.</p>
        </section>
        <section ref={secondRef} className={secondView ? Style.animationMiddleC2 : null}>
          <h3>Goals📈  </h3>
          <p>To become a team leader, guide and instruct in the area of backend development, and professionally grow as a Sr Backend Developer.</p>
        </section>
        <section ref={thirdRef} className={thirdView ? Style.animationMiddleC3 : null}>
          <h3>Message to my dear recruiters..📮  </h3>
          <p>Despite not meeting the minimum experience requirements for most of the roles, I believe I am a candidate worth considering. My greatest strengths lie in my ability to quickly grasp new concepts combined with my strong work ethic makes me a highly potential candidate for your company.</p>
        </section>
      </div>
    </article>
  )
}
