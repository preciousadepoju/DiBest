import React from "react";
import "./Pricingcards.css";

const Pricingcards = () => {
  return (
    <>
      <div id="pricing" className="text-center text-white text-3xl mt-4 font-semibold">
        DiBest Spot Pricing
      </div>
      <div className="pricingcard flex flex-col items-center mt-10 md:flex-row md:justify-around">
        <div className=" rounded overflow-hidden shadow-lg card w-full">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">
              DiBest Member
            </div>
            <p className="text-gray-700 text-lg cardText1">
              FREE TO JOIN <br /> Members can participate in both Auctions and
              Classified listing.
            </p>
            <p className="text-gray-700 text-lg cardText1 mt-2">
              Get in touch with us: Presently accepting private enrollments.{" "}
              <span>
                <a
                  href="mailto:info@dibestspot.com"
                  style={{ textDecoration: "underline" }}
                >
                  info@dibestspot.com
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className=" rounded overflow-hidden shadow-lg card w-full">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">
              DiBest Vendors
            </div>
            <p className="text-gray-700 text-lg cardText1">
              Vendors have the opportunity to join various marketplaces,
              including Restaurants, On-Demand Services, and Property Rentals.
            </p>
            <p className="text-gray-700 text-lg cardText1 mt-2">
              Get in touch with us: Presently accepting private vendor
              enrollments. <br />{" "}
              <span>
                <a
                  href="mailto:info@dibestspot.com"
                  style={{ textDecoration: "underline" }}
                >
                  info@dibestspot.com
                </a>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricingcards;
