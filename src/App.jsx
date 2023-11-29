import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import {Route, Routes} from 'react-router-dom'
import PlatformVendor from './pages/PlatformVendor'
import WhatsAppButton from './components/WhatsappButton'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/platform' element={<PlatformVendor/>}/>
    </Routes>
      {/* <Navbar/> */}
      <WhatsAppButton/>
      {/* <Home/> */}
      {/* <Features/> */}
      {/* <Pricing/> */}
      {/* <Contact/> */}
      {/* <About/> */}
      {/* <PlatformVendor/> */}
      {/* <Footer/> */}
    </>
  )
}

export default App
