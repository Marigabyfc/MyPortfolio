import Style from './NavBar.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import TranslateIcon from '@mui/icons-material/Translate';
import {nav} from '../Language/language.json'
import { useClick } from '../Hooks/useClick';
import { useModal } from '../Hooks/useModal';


export default function NavBar() {

  const [active, clicked] = useClick(false)

  return (
    <header>
      <nav className={Style.navBar}>
      <h2>MyPortfolio</h2>
        <ul  className={active ? Style.active : Style.ulNavBar}>
          <Link to='/' onClick={clicked}><li>Home</li></Link>
          <Link to='/contact' onClick={clicked}><li>Contact</li></Link>
          <Link to='/experience' onClick={clicked}><li>Experience</li></Link>
          <Link to='/skillSet' onClick={clicked}><li>Skill Set</li></Link>
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
          <button onClick={clicked}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </nav>      
    </header>
  )
};