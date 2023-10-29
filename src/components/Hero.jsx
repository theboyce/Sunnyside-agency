import React from 'react';
import Navbar from './Navbar';
import bg from '../assets/desktop/image-header.jpg';

const Hero = () => {
  return (
    <div className="h-screen bg-hero-pattern bg-cover bg-center">
      <Navbar />

      <div className="flex flex-col items-center justify-around h-[60%]">
        <h1 className="font-heading  text-[3.5rem] text-white">
          WE ARE CREATIVES
        </h1>
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="#FFF"
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
