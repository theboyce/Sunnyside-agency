import React from 'react';
import TextSection from './TextSection';
import LeftImage from '../assets/desktop/image-transform.jpg';
import RightImage from '../assets/desktop/image-stand-out.jpg';

const Services = () => {
  return (
    <div>
      <div className="flex h-[80vh]">
        {/* <TextSection
        heading={'Transform your brand'}
        description={
          'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
        }
        link={'#'}
      /> */}
        <div className="flex flex-1 justify-center items-center h-[80vh]">
          <div className="flex flex-col gap-5 w-[68%]">
            <h1 className="font-heading text-[36px] w-[70%]">
              Transform your brand
            </h1>
            <p className="font-body font-bold text-[18px] text-base ">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="#" className="font-heading">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="flex-1 h-[80vh]">
          <img src={LeftImage} alt="" className="h-full w-full" />
        </div>
      </div>
      {/* Right Service Section */}
      <div className="flex h-[80vh]">
        <div className="flex-1 h-[80vh]">
          <img src={RightImage} alt="" className="h-full w-full" />
        </div>
        <div className="flex flex-1 justify-center items-center h-[80vh]">
          <div className="flex flex-col gap-5 w-[68%]">
            <h1 className="font-heading text-[36px] w-[70%]">
              Transform your brand
            </h1>
            <p className="font-body font-bold text-[18px] text-base ">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="#" className="font-heading">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
