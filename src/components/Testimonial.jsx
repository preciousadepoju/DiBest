import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div>
            <center>
                <div className='testimonial'>
                    <div className='testimonyText'>Our past records speak for us. Check through the
                        reviews people who have used our services gave</div>
                    <div>
                        <div className='heady'>
                            <div className='testyCard my-4 mx-4'>
                                <div className='flex'><img src="/assets/49.jpg" alt="" className="card-img rounded-full w-[25%] h-[25%]" />
                                    <span className='my-5 mx-2 font-bold'>Vivian R</span></div>
                                <div className='cardText'>
                                Restaurant Experience:"I love how the marketplace brings together the best restaurants in the Cayman Islands. The variety of cuisines and the seamless ordering process make it my go-to for delicious meals. The convenience of paying online adds an extra layer of simplicity to the dining experience."

                                </div>
                            </div>
                            <div className='testyCard3 my-4'>
                                <div className='flex'><img src="/assets/22.jpg" alt="" className="card-img rounded-full w-[25%] h-[25%]" />
                                    <span className='my-5 mx-2 font-bold '>Carl P</span></div>
                                <div className='cardText'>
                                Local Business Support:"As a local restaurant owner, being part of this marketplace has significantly increased our visibility online. The platform's focus on supporting local businesses and has brought in new customers, and the ease of integrating their  system has made transactions smoother for both us and our patrons."
                                </div>
                            </div>
                        </div>

                        </div>

                        <div className="heady">
                            <div className='testyCard2 my-4 mx-4'>
                                <div className='flex'><img src="/assets/91.jpg" alt="" className="card-img rounded-full w-[25%] h-[25%]" />
                                    <span className='my-5 mx-2 font-bold'>Mark J</span></div>
                                <div className='cardText'>
                                Property Rentals:"I recently used the marketplace to find a vacation rental in the Cayman Islands, and I couldn't be happier with the experience. The range of properties available, coupled with the user-friendly interface, made it simple to find the perfect place. The secure checkout gave me peace of mind throughout the booking process of my condo."
                                </div>
                            </div>
                            <div className='testyCard1 my-4'>
                                <div className='flex'><img src="/assets/62.jpg" alt="" className="card-img rounded-full w-[25%] h-[25%]" />
                                    <span className='my-5 mx-2 font-bold'>Joan C</span></div>
                                <div className='cardText'>
                                On-Demand Service:"The on-demand services on this platform have been a game-changer for me. Whether it's a last-minute home cleaning or receiving a quick food delivery at my hotel, the ease of finding reliable service providers has made my life so much easier living in Cayman Islands.The integration with the eWallet ensures swift and hassle-free transactions."

                                </div>
                            </div>
                            
                    </div>

                </div>
            </center>
        </div>
    )
}

export default Testimonial