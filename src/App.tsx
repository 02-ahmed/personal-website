import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'

function App() {
  return (
    <>
     <NavBar />
     <Home />
     <About />
     <Skills />
     <Works />
     <Contact />
    </>
  )
}

export default App
