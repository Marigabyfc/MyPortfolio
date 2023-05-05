import React from 'react'
import './App.css'
import {Contact, Experience, NavBar, SkillSet, Home} from './components/views.js'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path= '/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path= '/experience' element={<Experience/>}/>
        <Route path= '/skillSet' element={<SkillSet/>}/>
      </Routes>
    </div>
  )
}

export default App
