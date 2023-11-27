import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu visibility and close after a second click
  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Close the menu after a second click
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    }
  };

  return (
    <div className="bg-white text-black fixed w-full z-20 top-0 start-0">
      <nav className="flex items-center justify-between p-4">
        <img src="/src/assets/dibest.png" alt="" style={{ width:'7%'}} />
        

        {/* Navbar Links (Hidden on Small Screens) */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Features</a>
          <a href="#" className="hover:text-gray-300">Pricing</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Platform Vendors</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
        </div>

        {/* Small Screen Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-xl focus:outline-none"
          >
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
              <a href="#" className="text-xl hover:text-gray-300">Home</a>
              <a href="#" className="text-xl hover:text-gray-300">Features</a>
              <a href="#" className="text-xl hover:text-gray-300">Pricing</a>
              <a href="#" className="text-xl hover:text-gray-300">About</a>
              <a href="#" className="text-xl hover:text-gray-300">Platform Vendors</a>
              <a href="#" className="text-xl hover:text-gray-300">Contact Us</a>
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
          <button  className="px-3 py-1 bg-[#A78236] text-white rounded-md hover:bg-blue-600 focus:outline-none">
            <a href=" panel.dibestspot.com/login">Login</a>
          </button>
          <button className="text-white px-3 py-1 bg-[#28285B] rounded-md hover:bg-green-600 focus:outline-none">
            Enroll as Vendor
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;