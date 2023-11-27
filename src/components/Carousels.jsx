import React from 'react';

import { Carousel } from 'flowbite-react';

function Carousels() {
  return (
    <>
     <div className="h-96 sm:h-64 xl:h-80 2xl:h-100  z-0 relative" style={{height:'537px'}}>
       <Carousel leftControl=" " rightControl=" " showIndicators={false}>
         <img src="/src/assets/Frame 9.png"  alt="..." />
         <img src="/src/assets/Frame 10.png" alt="..." />
         <img src="/src/assets/Frame 11.png" alt="..." />
         <img src="/src/assets/Frame 12.png" alt="..." />
       </Carousel>
     </div>
    </>
  );
}

export default Carousels
