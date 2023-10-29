import React from 'react';

const TextSection = ({ heading, description, link }) => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col w-[60%] h-[50%] gap-8">
        <h1 className="font-heading font-bold text-[2rem]">{heading}</h1>
        <p className="font-[18px]">{description}</p>
        <a href={link}>LEARN MORE</a>
      </div>
    </div>
  );
};

export default TextSection;
