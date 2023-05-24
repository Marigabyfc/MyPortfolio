import Style from './NavBar.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import TranslateIcon from '@mui/icons-material/Translate';
import {nav} from '../Language/language.json'
import { useClick } from '../Hooks/useClick';
import logo from '../../images/coverBlancoRelleno.png'


export default function NavBar() {

  const [clicked, openModal, closeModal] = useClick(false)

  return (
    <header>
      <nav className={Style.navBar}>
      <figure>
       <img src={logo} alt="logo" width='140px'/>
      </figure>
        <ul  className={clicked ? Style.active : Style.ulNavBar}>
          <li><Link to='/home' onClick={openModal && closeModal}>Home</Link></li>
            <hr />
          <li><Link to='/contact' onClick={openModal && closeModal}>Contact</Link></li>
            <hr />
          <li><Link to='/experience' onClick={openModal && closeModal}>Experience</Link></li>
            <hr />
          <li><Link to='/skillSet' onClick={openModal && closeModal}>Skill Set</Link></li>
        </ul>   
          <div className={Style.selectLanguage}>
            <TranslateIcon className={Style.icon}/>
              <select name="language" className={Style.firstSelect}>
                <option value="Language" disabled>{nav.language.en[0]}</option>
                <option value="es">{nav.language.en[2]}</option>
                <option value="en">{nav.language.en[1]}</option>
              </select>
          </div>    
        <div className={Style.menu}>
          <button onClick={openModal}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </nav>      
    </header>
  )
};