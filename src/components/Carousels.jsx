import React from 'react';
import './Carousels.css'
import { Carousel } from 'flowbite-react';

function Carousels() {
  return (
    <>
     <div className="h-96 sm:h-64 xl:h-80 2xl:h-100  z-0 relative" style={{height:'537px'}}>
       <Carousel leftControl=" " rightControl=" " className='carouselDiv' showIndicators={false}>
         <img src="/src/assets/Frame 9.png" className='imges'  alt="..." />
         <img src="/src/assets/Frame 10.png" className='imges' alt="..." />
         <img src="/src/assets/Frame 11.png" className='imges' alt="..." />
         <img src="/src/assets/Frame 12.png" className='imges' alt="..." />
       </Carousel>
     </div>
    </>
  );
}

export default Carousels
