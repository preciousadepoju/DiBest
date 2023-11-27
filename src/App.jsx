import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
      <Navbar/>
      {/* <Home/> */}
      <Features/>
      <Pricing/>
      <Contact/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
