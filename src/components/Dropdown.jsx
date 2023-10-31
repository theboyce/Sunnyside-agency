import React from 'react';

const Dropdown = () => {
  return (
    <div className="w-[80%] bg-white-only h-[45vh] flex justify-center items-center md:hidden absolute -translate-x-[50%] left-[50%]">
      <nav className="flex flex-col w-[60%] items-center gap-10 ">
        <a href="#" className="text-dark-grayish-blue text-[18px] font-body">
          About
        </a>
        <a href="#" className="text-dark-grayish-blue text-[18px] font-body">
          Services
        </a>
        <a href="#" className="text-dark-grayish-blue text-[18px] font-body">
          Projects
        </a>
        <button className="px-8 py-5 bg-yellow-only text-very-dark-desaturated-blue font-heading rounded-full">
          CONTACT
        </button>
      </nav>
    </div>
  );
};

export default Dropdown;
