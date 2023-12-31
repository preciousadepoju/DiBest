import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";


const Navbar = ({getShow }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    }
  };
  

  return (
    <>
      <div className="bg-white text-black fixed w-full z-20 top-0 start-0">
        <nav className="flex items-center justify-between p-4">
          <img src="../assets/dibest.png" alt="" style={{ width: "7%" }} />

          {/* Navbar Links (Hidden on Small Screens) */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="#features" className="hover:text-gray-800">
              Features
            </a>
            <a href="#pricing" className="hover:text-gray-800">
              Pricing
            </a>
            <a href="#about" className="hover:text-gray-800">
              About
            </a>
            <a
              href="#platform"
              className="hover:text-gray-800"
              // onClick={handleClick}
            >
              Platform Vendors
            </a>
            <a href="/contact" className="hover:text-gray-800">
              Contact Us
            </a>
          </div>

          {/* Small Screen Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-xl focus:outline-none">
              ☰
            </button>
          </div>

          {/* Hamburger Menu Content */}
          <Transition
            show={isOpen}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="md:hidden absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80">
              <div className="flex flex-col items-center p-8 space-y-4">
                <a href="/" className="text-xl hover:text-gray-500">
                  Home
                </a>
                <a href="/features" className="text-xl hover:text-gray-500">
                  Features
                </a>
                <a href="/pricing" className="text-xl hover:text-gray-500">
                  Pricing
                </a>
                <a href="/about" className="text-xl hover:text-gray-500">
                  About
                </a>
                <a href="/platform" className="text-xl hover:text-gray-500">
                  Platform Vendors
                </a>
                <a href="/contact" className="text-xl hover:text-gray-500">
                  Contact Us
                </a>
              </div>
            </div>
          </Transition>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Buttons - Login and Enroll as Vendor */}
          <div className="flex space-x-4">
            <button className="px-3 py-1 bg-[#A78236] text-white rounded-md hover:bg-blue-600 focus:outline-none">
              <a href=" panel.dibestspot.com/login">Login</a>
            </button>
            <button
              className="text-white px-3 py-1 bg-[#28285B] rounded-md hover:bg-green-600 focus:outline-none"
            >
              <Link to="/Form">Enroll as a vendor</Link>
            </button>
          </div>
        </nav>
      </div>
      
    </>
  );
};

export default Navbar;
