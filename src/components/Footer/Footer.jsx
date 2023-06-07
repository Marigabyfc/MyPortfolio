import Style from './Footer.module.css'
import React from 'react'

export default function Footer() {
  return (
    <footer className={Style.footer}>
      <div>
        <p>&copy;2023 Flo's - <span>Copyright All rights reserved. </span></p>
      </div>
    </footer>
  )
}

// ©	&copy;	&#169;	&#xA9;	copyright symbol
// Ⓒ	 	&#9400;	&#x24B8;	C inside circle

