import React from 'react'
import './About.css'
import Testimonial from '../components/Testimonial'

const About = () => {
    return (

        <>
            <Testimonial />
            <div className='about '>
                <div className='aboutTxt text-center'>About</div>
                <div className='aboutUser '>
                DiBest Spot is an online platform that comprises of several marketplaces. <br />The platform allows consumers or vendors to buy and sell goods or services online. <br /> DiBest Spot acts as the intermediary that fosters engagement and helps members expand their reach to larger audiences.
                </div>
                <div className='my-2 shadow-lg mainOffer'>
                    <p className='offer text-center'>🎁 Exclusive Offer for Early Joiners</p>
                    <center>
                        <p className='register text-center'>Register now and receive a special welcome gift! Be among the first to experience the magic of DiBest Spot.</p>
                    </center>
                </div>
            </div>
        </>
    )
}

export default About