import React from "react";
import "./Footer.css";
// import {useNavigate} from 'react-router-dom'

const Footer = () => {
  // const navigate = useNavigate
  const resTaurant = () => {
    navigate("/platform");
  };
  return (
    <div>
      <div className="footers">
        <div className="footer">
          <div className="unite flex">
            <ul className="mx-8 platform2">
              <li>
                <h3 className="font-bold">PLATFORM SERVICES</h3>
              </li>
              <li>
                <a href="https://jtpmoagency.com">Digital Marketing</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="#">Business Consulting</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="https://7figurestrategyadvisors.com/">
                  Strategy Development
                </a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="https://mywarmembrace.com">Project Management</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="#">PR & Media Advertising</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="https://www.jtpmo.com/brands">Our Brands</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="#">Partners</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="#">Vendors</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="#">Medical Providers</a>
              </li>
              {/* <hr /> */}
            </ul>
            <ul className="ms-8 platform">
              <li>
                <h3 className="font-bold">PLATFORM LINK</h3>
              </li>
              <li>
                <a href="">Media Releases</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="">Staff</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="">Affiliates</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="">Press Kit</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="">DiBest News</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="">Community Education</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="">FAQ</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="">Terms of Service</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="">Privacy Policy</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="">Contact Us</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="">Support</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="">Blog</a>
              </li>
              {/* <hr /> */}
              <li>
                <a href="" className="flex">
                  <span>
                    <img
                      src="/assets/google-play-download-android-app-logo-svgrepo-com.svg"
                      className="imgs"
                      alt=""
                    />
                  </span>{" "}
                  <span>
                    <img
                      src="/assets/download-on-the-app-store-apple-logo-svgrepo-com.svg"
                      alt=""
                      className="imgs1"
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <ul className="mx-8 noshow">
            <h3 className="font-bold">MARKETPLACES</h3>
            <li>
              <a href="" onClick={resTaurant}>
                Restaurants
              </a>
            </li>
            {/* <hr /> */}
            <li>
              <a href="">OnDemand Services</a>
            </li>
            {/* <hr /> */}
            <li>
              <a href="">Property Rentals</a>
            </li>
            {/* <hr /> */}
            <li>
              <a href="">Egift</a>
            </li>
            {/* <hr /> */}
            <li>
              <a href="">Ewallets</a>
            </li>
            {/* <hr /> */}
            <li>
              <a href="">Caribbean Region</a>
            </li>
            {/* <hr /> */}
            <li>
              <a href="">Medical Services</a>
            </li>
            {/* <hr /> */}
            <div className="signup my-5 font-bold">
              Newsletter Subscription{" "}
              <span>
                <input
                  type="email"
                  className="mt-4 p-3 input focus:outline-none"
                  name=""
                  placeholder="email-adress"
                  id=""
                />{" "}
                <a href="mailto:info@dibestspot.com">
                  <button
                    type="submit"
                    className="bg-white p-3.5 submit mr-3 text-black"
                  >
                    Submit
                  </button>
                </a>
              </span>
            </div>
            <div>
              <span className="font-bold text-base contacty">
                <span>Contact Us:</span>{" "}
                <a
                  href="mailto:info@dibestspot.com"
                  className="text-gray-800 underline text-base font-bold info"
                >
                  info@dibestspot.com
                </a>
              </span>
            </div>
          </ul>
        </div>
        <center>
          <small style={{ display: "flex" }} className="text-white copy">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_69_151)">
                <path
                  d="M11.9998 0.00146484C5.38347 0.00146484 0 5.38226 0 12.0003C0 18.6156 5.38347 23.9991 11.9998 23.9991C18.6169 23.9991 24 18.6156 24 12.0003C24 5.38226 18.6169 0.00146484 11.9998 0.00146484ZM11.9998 21.3258C6.85691 21.3258 2.67335 17.1425 2.67335 12.0003C2.67335 6.85596 6.85691 2.67266 11.9998 2.67266C17.1432 2.67266 21.3268 6.85602 21.3268 12.0003C21.3267 17.1425 17.1432 21.3258 11.9998 21.3258Z"
                  fill="white"
                />
                <path
                  d="M15.9385 14.174C15.1719 15.4894 13.7465 16.3054 12.2186 16.3054C9.84584 16.3054 7.91313 14.3732 7.91313 12.0004C7.91313 9.62565 9.84584 7.69274 12.2186 7.69274C13.7465 7.69274 15.1719 8.51175 15.9385 9.82459L16.0375 9.99616H18.9296L18.756 9.53055C18.2527 8.19734 17.3697 7.06378 16.2008 6.2547C15.029 5.44352 13.6525 5.01318 12.2186 5.01318C8.36639 5.01318 5.2337 8.14855 5.2337 12.0004C5.2337 15.8525 8.36639 18.9849 12.2186 18.9849C13.6525 18.9849 15.0289 18.556 16.2008 17.7436C17.3697 16.9343 18.2527 15.8012 18.756 14.4679L18.9296 14.0021H16.0375L15.9385 14.174Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_69_151">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
            2023 DiBest Spot. All Rights Reserved{" "}
          </small>
        </center>
      </div>
    </div>
  );
};

export default Footer;
