import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Features/>
      <Pricing/>
      <Contact/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
