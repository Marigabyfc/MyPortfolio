import React from 'react'
import './App.css'
import {Contact, Experience, NavBar, SkillSet, Home, Landing} from './components/views.js'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {

const location = useLocation()

return (
  <div>
      { location.pathname === '/' ? <Landing/> : <NavBar/> }
      <Routes>
        <Route exact path= '/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path= '/experience' element={<Experience/>}/>
        <Route path= '/skillSet' element={<SkillSet/>}/>
      </Routes>
    </div>
  )
}

export default App
