import React from 'react';

const BasicServices = () => {
  return (
    <div className="flex flex-col md:flex-row  md:h-[90vh]">
      <div className="flex-1 bg-graphic-design md:bg-first-service bg-cover flex justify-center  pt-[70vh] sm:pb-[10vh] md:pt-[60vh] ">
        <div className="flex flex-col gap-6 text-center w-[90%] md:w-[55%]">
          <h2 className="font-heading text-[24px] text-dark-desaturated-cyan">
            Graphic Design
          </h2>
          <p className="font-body text-[18px] text-dark-desaturated-cyan leading-6">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and capture's potential clients
            attention.
          </p>
        </div>
      </div>
      <div className="flex-1 bg-photography-mobile md:bg-second-service bg-cover flex justify-center pt-[70vh] sm:pt-[10vh] md:pt-[60vh]">
        <div className="flex flex-col gap-6 items-center text-center w-[90%] md:w-[55%] ">
          <h2 className="font-heading text-[24px] text-dark-blue ">
            Photography
          </h2>
          <p className="font-body text-[18px] text-dark-blue leading-6">
            Increase credibility by getting the most stunning, high-quality
            photos that improve your busines image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicServices;
