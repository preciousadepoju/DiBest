import React from "react";
import "./DiBestSpot.css";
import Pricingcards from "./Pricingcards";

const DiBestSpot = () => {
  return (
    <div>
      <div className="buttonCont">
        <center>
          <div className="text-3xl text-white font-semibold">
            DiBest Spot Marketplaces
          </div>
          <div className="flex mt-3 flex-wrap justify-center">
            <button
              type="button"
            
              className=" focus:outline-none text-white bg-[#F6A913] hover:bg-yellow-600 focus:ring-yellow-300 font-medium text-sm px-5 py-2 h-10 m-2  w-[90%] md:w-[40%]  "
              // style={{ width: "40%" }}
            >
              <a href="#">Restaurants </a>
            </button>
            <button
              type="button"
              className=" focus:outline-none text-white bg-[#0C8BE8] hover:bg-yellow-600 focus:ring-yellow-300 font-medium text-sm px-3 py-2 h-12 m-2   w-[90%] md:w-[40%]"
              // style={{ width: "40%" }}
            >
              <a href="#">OnDemand Services</a>
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-[#FF5D01] hover:bg-yellow-600 focus:ring-yellow-300 font-medium text-sm px-5 py-2 h-10 m-2   w-[90%] md:w-[40%] "
              // style={{ width: "40%" }}
            >
              <a href="#">Property Rental</a>
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-[#F72289] hover:bg-yellow-600 focus:ring-yellow-300 font-medium text-sm px-5 py-2 h-10  m-2  w-[90%] md:w-[40%] "
              // style={{ width: "40%" }}
            >
              <a href="#">Ecommerce</a>
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-[#1661F4] hover:bg-yellow-600 focus:ring-yellow-300 font-medium text-sm px-5 py-2 h-10 m-2    w-[90%] md:w-[40%] "
              // style={{ width: "40%" }}
            >
              <a href="#">Ewallet</a>
            </button>
            <button
              type="button"
              className="focus:outline-none text-white  hover:bg-yellow-600 focus:ring-yellow-300 font-medium text-sm px-5 py-2 h-10 m-2   w-[90%] md:w-[40%] "
              style={{ backgroundColor: "rgb(0,168,132)" }}
            >
              <a href="#">Egift</a>
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-[#08358E] hover:bg-yellow-600 focus:ring-yellow-300 font-medium text-sm px-5 py-2 h-10 m-2   w-[90%] md:w-[40%] "
              // style={{ width: "40%" }}
            >
              <a href="#">Caribbean Region</a>
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-[#A78236] hover:bg-yellow-600 focus:ring-yellow-300 font-medium text-sm px-5 py-2 h-10 m-2   w-[90%] md:w-[40%] "
              // style={{ width: "40%" }}
            >
              <a href="#">Medical</a>
            </button>
          </div>
        </center>

        <Pricingcards />
      </div>
    </div>
  );
};

export default DiBestSpot;
