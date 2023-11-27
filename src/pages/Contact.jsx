import React from 'react'
import './Contact.css'
import Ads from '../components/Ads'

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <center>
          <div className='vendor'>Private Invitation: Vendors Enrollment</div>
          <div className='interest'>Interested? Contact us for details</div>
          <button className='btn'>Email Us</button>
        </center>
      </div>
      <Ads />
    </div>
  )
}

export default Contact