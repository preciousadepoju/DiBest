import React from 'react';
import './WhatsappButton.css'


const WhatsAppButton = () => {
  

  return (
    <div className="fixed bottom-8 cover" >
       <a aria-label="Chat on WhatsApp" href="https://wa.me/+16028601112">
      <img alt="Chat on WhatsApp" src="/assets/whatsapp-svgrepo-com.svg" className='whatsapp'/>
    </a>
    </div>
  );
};

export default WhatsAppButton;
