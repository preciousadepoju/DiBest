import React from 'react';
import './Carousels.css'
import { Carousel } from 'flowbite-react';

function Carousels() {
  return (
    <>
     <div className="h-96 sm:h-64 xl:h-80 2xl:h-100  z-0 relative" style={{height:'537px'}}>
       <Carousel leftControl="<<" rightControl=" >> " className='carouselDiv' showIndicators={false}>
         <img src="/public/assets/92ad388afca4439c70c2ff94c5043fb1.jpg" className='imges' alt="..." />
         <img src="/public/assets/medical-industry.jpg" className='imges'  alt="..." />
         <img src="/public/assets/property.jpg" className='imges' alt="..." />
       </Carousel>
     </div>
    </>
  );
}

export default Carousels
