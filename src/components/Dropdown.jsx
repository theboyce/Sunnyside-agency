import React from 'react';

const Dropdown = () => {
  return (
    <div className="w-[80%] bg-white-only h-[50vh] flex justify-center items-center md:hidden absolute -translate-x-[50%] left-[50%]">
      <nav className="flex flex-col w-[60%] items-center gap-8 ">
        <a href="#" className="text-dark-grayish-blue text-[18px] font-body">
          About
        </a>
        <a href="#" className="text-dark-grayish-blue text-[18px] font-body">
          Services
        </a>
        <a href="#" className="text-dark-grayish-blue text-[18px] font-body">
          Projects
        </a>
        <button className="px-6 py-4 bg-yellow-only font-heading rounded-full">
          CONTACT
        </button>
      </nav>
    </div>
  );
};

export default Dropdown;
