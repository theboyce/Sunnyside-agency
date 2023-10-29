import React from 'react';
import LeftImage from '../assets/desktop/image-transform.jpg';
import RightImage from '../assets/desktop/image-stand-out.jpg';

const Services = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row h-[100vh] md:h-[80vh]">
        <div className="flex flex-col flex-1 justify-center items-center h-[100vh] md:h-[80vh] ">
          <div className="flex flex-col items-center  gap-5 sm:w-[75%] md:w-[68%] md:items-start">
            <h1 className="font-heading text-very-dark-desaturated-blue text-center md:text-left text-[28px] md:text-[36px] w-[80%] md:w-[70%] leading-tight">
              Transform your brand
            </h1>
            <p className="font-body text-center md:text-left text-dark-grayish-blue font-bold text-[18px] leading-6 ">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a
              href="#"
              className="font-heading inline border-b-[6px] border-yellow-only border-solid pb-2 text-very-dark-desaturated-blue"
            >
              LEARN MORE
            </a>
          </div>
        </div>

        <div className="flex-1 h-[80vh] ">
          <img src={LeftImage} alt="" className="h-full w-full" />
        </div>
      </div>
      {/* Right Service Section */}
      <div className="flex flex-col md:flex-row h-[100vh] md:h-[80vh]">
        <div className="flex-1 h-[80vh]">
          <img src={RightImage} alt="" className="h-full w-full" />
        </div>
        <div className="flex flex-1 justify-center items-center h-[80vh]">
          <div className="flex flex-col items-center  gap-5 sm:w-[75%] md:w-[68%] md:items-start">
            <h1 className="font-heading text-very-dark-desaturated-blue text-center md:text-left text-[28px] md:text-[36px] w-[80%] md:w-[70%] leading-tight">
              Standout to the right audience
            </h1>
            <p className="font-body text-center md:text-left text-dark-grayish-blue font-bold text-[18px] leading-6  ">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a
              href="#"
              className="font-heading inline border-b-[6px]  border-soft-red border-solid pb-2 text-very-dark-desaturated-blue
               "
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
