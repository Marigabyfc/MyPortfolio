import Style from './NavBar.module.css'
import React, { useState } from 'react'
import { nav } from '../Language/language.json'
import { logo, TranslateIcon } from '../views'
import { useInView } from 'react-intersection-observer'

export default function NavBar({lan}) {

  const [fix, setFix] = useState(false)

  const { ref: firstRef, inView: firstInView } = useInView({triggerOnce: true})

 function setFixed(){
    if (window.scrollY >= 200) {
      setFix(true)
      console.log(window.scrollY + '  scroll');
    }
    else{
      setFix(false)
    }
  };

  window.addEventListener('scroll', setFixed)

  const [ open, setOpen ] = useState(false)

  const click = () =>{
    setOpen(!open)
  }

  return (
    <header>
      <nav ref={firstRef} className={Style.navBar}>
      <figure id={Style.logo}>
        <a href="#landing">
          <img src={logo} alt="logo" width='140px'/>
        </a>
      </figure>
        <ul  className={`${Style.ulNavBar} ${open ? Style.active : null}` }>
          <li id={firstInView ? Style.li1 : ''}>
            <a href='#home' onClick={click}>
              Home
            </a>
          </li>
            <hr />
          <li id={firstInView ? Style.li2 : ''}>
            <a  href='#contact' onClick={click}>
              Contact
            </a>
          </li>
            <hr />
          <li id={firstInView ? Style.li3 : ''}>
            <a href='#experience' onClick={click}>
              Experience
            </a>
          </li>
            <hr />
          <li id={firstInView ? Style.li4 : ''}>
            <a href='#skillset' onClick={click}>
              Skill Set
            </a>
          </li>
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
          <button onClick={click}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </nav>      
    </header>
  )
};