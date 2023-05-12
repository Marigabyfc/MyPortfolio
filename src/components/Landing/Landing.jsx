import Style from './Landing.module.css'
import React from 'react'
import logo from '../../images/coverBlanco.png'
import {Link} from 'react-router-dom'

export default function Landing() {
  return (
    <header className={Style.landing}>
      <figure>
        <Link to='/home'><img src={logo} alt="logo"/></Link>
      </figure>
    </header>
  )
}
