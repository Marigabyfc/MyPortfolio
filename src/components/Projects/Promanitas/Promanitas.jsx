import Style from './Promanitas.module.css'
import React from 'react'

export default function Promanitas({children, open, closeModal}) {

  return (
    <main className={open ? Style.projectsPromanitas : Style.isClose}>
      <article className={Style.isOpen}>
        <div>
          <button onClick={closeModal}>X</button>
          {children}
        </div>
      </article>
    </main>
  )
}
