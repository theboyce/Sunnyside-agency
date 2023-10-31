import React, { useState } from 'react';
import Logo from './Logo';
import Dropdown from './Dropdown';

const Navbar = ({ toggleMenu }) => {
  return (
    <div className="h-[15vh] w-[100%] flex justify-between items-center px-[2rem]">
      <Logo fill="#ffffff" />
      <nav className="sm:hidden md:flex gap-10 justify-end items-center flex-1 ">
        <a href="#" className="text-white-only text-[18px] font-body">
          About
        </a>
        <a href="#" className="text-white-only text-[18px] font-body">
          Services
        </a>
        <a href="#" className="text-white-only text-[18px] font-body">
          Projects
        </a>
        <button className="px-6 py-4 bg-white-only text-dark-blue font-heading rounded-full">
          CONTACT
        </button>
      </nav>

      <div className="" onClick={() => toggleMenu()}>
        <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
            fill="#FFF"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
