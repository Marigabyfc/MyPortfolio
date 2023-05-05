import React, {useState, useEffect} from 'react'

export default function Contact() {
  return (
    <div>
      <form>
        <label htmlFor="name">My name: </label>
        <input type="text" name='name' value='Mariana Flores' readOnly/>
        <label htmlFor="email">Email: </label>
        <input type="text" name='email' value='marianag_flores@hotmail.com' readOnly/>
        <label htmlFor="adress">Adress: </label>
        <input type="text" name='adress' value='Argentina, Buenos Aires, CABA' readOnly/>
        <label htmlFor="birthday">Birth Date: </label>
        <input type="text" name='birthday' value='30-01-2003' readOnly/>
      </form>
    </div>
  )
}
