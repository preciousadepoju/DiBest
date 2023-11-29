import React from 'react';
import './Carousels.css'
import { Carousel } from 'flowbite-react';

function Carousels() {
  return (
    <>
     <div className="h-96 sm:h-64 xl:h-80 2xl:h-100  z-0 relative carousel" style={{height:'537px'}}>
       <Carousel leftControl="<<" rightControl=">> " className='carouselDiv' showIndicators={false}>
         <img src="/assets/frame1.jfif" className='imges' alt="..." />
         <img src="/assets/frame2.jfif" className='imges' alt="..." />
         <img src="/assets/property.jpg" className='imges' alt="..." />
         <img src="/assets/frame3.jfif" className='imges' alt="..." />
         <img src="/assets/medic.jpg" className='imges' alt="..." />
         <img src="/assets/frame4.jpg" className='imges' alt="..." />
         <img src="/assets/ewallet.jpg" className='imges' alt="..." />




       </Carousel>
     </div>
    </>
  );
}

export default Carousels
