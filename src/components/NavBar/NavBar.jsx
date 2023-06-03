import Style from './NavBar.module.css'
import React, { useState } from 'react'
import { nav } from '../Language/language.json'
import { logo, TranslateIcon } from '../views'
import { useInView } from 'react-intersection-observer'

export default function NavBar() {

  const { ref : firstRef, inView: firstView } = useInView(/* {triggerOnce: true} */)

  const { ref : secondRef, inView: secondView } = useInView(/* {triggerOnce: true} */)

  const [fix, setFix] = useState(false)

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
      <figure  /* className={firstView ? Style.changeNav : ''} */>
        <a href="#landing">
          <img src={logo} alt="logo" width='140px'/>
        </a>
      </figure>
        <ul  className={`${Style.ulNavBar} ${firstView ? Style.changeNav : null}` }>
          {/* <div className={`${Style.uldiv} ${firstView ? Style.changeNav : null}`}> */}
          <li className={firstView ? Style.changeNav : null}>
            <a href='#home' onClick={click}>
              Home
            </a>
          </li>
            <hr />
          <li>
            <a  href='#contact' onClick={click}>
              Contact
            </a>
          </li>
            <hr />
          <li>
            <a href='#experience' onClick={click}>
              Experience
            </a>
          </li>
            <hr />
          <li>
            <a href='#skillset' onClick={click}>
              Skill Set
            </a>
          </li>
          {/* </div> */}
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