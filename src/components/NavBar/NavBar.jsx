import Style from './NavBar.module.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {

  const [clicked, setClicked] = useState(false);

  const handleClicked = (e) =>{
    setClicked(!clicked)
  }

  return (
    <div>
      <nav className={Style.navBar} >
        <h2>MyPortfolio</h2>
        <div  className={clicked ? Style.active : Style.divSpanNavBar}>
        <Link to='/' onClick={(e)=> handleClicked(e)}><span>Home</span></Link>
        <hr />
        <Link to='/contact' onClick={(e)=> handleClicked(e)}><span>Contact</span></Link>
        <hr />
        <Link to='/experience' onClick={(e)=> handleClicked(e)}><span>Experience</span></Link>
        <hr />
        <Link to='/skillSet' onClick={(e)=> handleClicked(e)}><span>Skill Set</span></Link>
        </div>
        <div className={Style.menu}>
          <button onClick={(e)=>handleClicked(e)}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </nav>      
    </div>
  )
}