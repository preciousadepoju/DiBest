import React from 'react'
import Carousels from '../components/Carousels'
import './Home.css'
import Features from './Features'
import Pricing from './Pricing'
import Contact from './Contact'
import About from './About'
import Footer  from './Footer'

const Home = () => {
  return (
    <div>
      <Carousels/>
      <center>
      <div className='startnow absolute'>
      <h1 className=' font-bold text-[#A78236] welcome' >Welcome to DiBest Spot</h1>
      <h3 className='text-[#A78236] text-2xl font-medium explore'>Explore, Sign-up and Connect in the Cayman Islands and the Caribbean </h3>
      <button type="button" class="startbtn focus:outline-none text-white bg-[#A78236] hover:bg-yellow-600 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 h-10 mt-1.5 ms-2  ">Start Now</button>
      </div>

      <div className='whydibest items-center'>
        <div className="whyText">
        Why DiBest Spot <br />for the Caribbean?
        </div>
        <div className='cardDiv'>
        <div className='whyCard'>
          <div> &#127965;&#65039; </div>
          <div className='whyCardt'>
          Cayman Islands
          </div>
          <div className='whyCardf'>
          Experience a marketplace 
          designed with the unique 
          needs of the Cayman 
          Islands in mind
          </div>
        </div>
        <div className='whyCard'>
        <div> &#127802; </div>
          <div className='whyCardt'>
           
            Caribbean Region
          </div>
          <div className='whyCardf'>
          Connect with a diverse and vibrant community from across the Caribbean
          </div>
        </div>
        </div>
      </div>
      </center>
      <Features/>
      <Pricing/>
      <Contact/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home