import React, { useState } from 'react';
import Navbar from './Navbar';
import bg from '../assets/desktop/image-header.jpg';
import Dropdown from './Dropdown';

const Hero = () => {
  // state to open or close navmenu
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div
      onClick={() => toggleMenu()}
      className="h-screen bg-hero-small lg:bg-hero-pattern bg-cover bg-center relative"
    >
      <Navbar toggleMenu={toggleMenu} />
      {
        // if open is true, ...
        open && <Dropdown />
      }

      <div className="flex flex-col items-center justify-around h-[60%]">
        <h1 className="sm:text-[2.8rem] sm:text-center font-heading  text-[3.5rem] text-white-only tracking-wider">
          WE ARE CREATIVES
        </h1>
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="#FFFFFF"
            stroke-width="6"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
