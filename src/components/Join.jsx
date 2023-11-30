import React from "react";
import "./join.css";
const Join = () => {
  return (
    <div>
      <div className="joinDB bg-gray-200 flex flex-col lg:flex-row space-y-3 ">
        <div className="joinTxt">
          Join any of the DiBest Spot Marketplaces Today and Enjoy
        </div>

        <div className="flex flex-col justify-center ">
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="shop flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row w-full mb-2 md:w-[60%]"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg shopimg"
                src="/assets/group 1.jfif"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h6 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-black text-xl">
                  &#128717;&#65039; Shop Local
                </h6>
                <p className="mb-3 font-normal text-black">
                  Support local businesses and find the best deals from
                  restaurants, ondemand service providers, rental properties,
                  classifies and local products crafted or sold right in your
                  community.
                </p>
              </div>
            </a>
          </div>

          <div className="middleJoin flex flex-col lg:flex-row space-y-3 items-center justify-between">
            <div className="w-full lg:w-4/5">
              <a
                href="#"
                className="shop1 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:w-[80%]"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg shopimg"
                  src="/assets/group 2.jfif"
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h6 className=" text-md font-bold tracking-tight text-gray-900 dark:text-black text-xl">
                    &#127760; Go Global
                  </h6>
                  <p className="mb-3 font-normal text-black">
                    {" "}
                    Explore a world of possibilities with international sellers
                    and unique items from around the globe
                  </p>
                </div>
              </a>
            </div>

            <div className=" lg:w-4/5">
              <a
                href="#"
                className="shop2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:w-[100%]"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg shopimg1"
                  src="/assets/group 3.jfif"
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h6 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-black text-xl">
                    &#128640; Exciting Auctions
                  </h6>
                  <p className="mb-3 font-normal text-black">
                    Dive into the thrill of live auctions. Bid on your dream
                    items and enjoy the excitement of winning!
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="#"
              className="mt-2 shop3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:w-[60%]"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg shopimg1"
                src="/assets/group 4.jfif"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h6 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-black text-xl">
                  &#129309; Community Connection
                </h6>
                <p className="mb-3 font-normal text-black">
                  Connect with like-minded individuals, share recommendations,
                  and build a vibrant online community
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <center>
        <div className="missOut">
          Don't Miss Out! Join DiBest Spot Marketplaces Today! <br /> Elevate
          Your Shopping Experience! Expand Your Business Online!
        </div>
      </center>
    </div>
  );
};

export default Join;
