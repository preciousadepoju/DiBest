import React from 'react';
import './Pricingcards.css'

const Pricingcards = () => {
  return (
    <>
    <div className='text-center text-white text-3xl mt-4'>DiBest Spot Pricing</div>
    <div className='pricingcard'>
        
    <div className="max-w-sm rounded overflow-hidden shadow-lg card">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">DiBest Member</div>
        <p className="text-gray-700 text-base cardText1">
        FREE to join Members can participate in both Auctions and Classified listing.
        </p>
        <p className="text-gray-700 text-sm mt-4">Get in touch with us: Presently accepting private enrollments. <small><a href="mailto:infor@dibestspot.com" style={{textDecoration:'underline'}}>infor@dibestspot.com</a></small></p>
      </div>
      <div className="px-6 py-4 tags">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #tag3
        </span>
      
      </div>
    </div>

    <div className="max-w-sm rounded overflow-hidden shadow-lg card">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">DiBest Vendors</div>
        <p className="text-gray-700 text-base cardText1">
         Vendors have the opportunity to join various marketplaces, including Restaurants, On-Demand Services, and Property Rentals.
        </p>
        <p className="text-gray-700 text-sm mt-4">Get in touch with us: Presently accepting private enrollments.<small><a href="mailto:infor@dibestspot.com" style={{textDecoration:'underline'}}>infor@dibestspot.com</a></small> </p>
      </div>
      <div className="px-6 py-4 tags">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #tag3
        </span>
      </div>
    </div>
    </div>
    </>
  );
};

export default Pricingcards;
