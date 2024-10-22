import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import About from './Components/About'
import Skills from './Components/Skills'
import Services from './Components/Services'
import Contact from './Components/Contact'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}  />  
      <Route path='/projects' element={<Projects />}  />  
      <Route path='/about' element={<About />}  />  
      <Route path='/skills' element={<Skills />}  />  
      <Route path='/services' element={<Services />}  />  
      <Route path='/contact' element={<Contact />}  /> 


    </Routes>
  )
}

export default App
