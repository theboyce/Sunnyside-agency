import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="h-[15vh] w-[100%] flex justify-between items-center px-[2rem]">
      <Logo fill="#ffffff" />
      <nav className="flex gap-10 justify-end items-center flex-1 ">
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
    </div>
  );
};

export default Navbar;
