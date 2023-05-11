import Style from './MarigabyFoods.module.css'
import React from 'react'

export default function MarigabyFoods({children, open, closeModal}) {

  return (
    <main className={open ? Style.projectsFoods : Style.isClose}>
      <article className={Style.isOpen}>
        <div>
          <button onClick={closeModal}>X</button>
          {children}
        </div>
      </article>
    </main>
  )
}
