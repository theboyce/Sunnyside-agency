import React from 'react';

const BasicServices = () => {
  return (
    <div className="flex h-[80vh]">
      <div className="flex-1 bg-first-service bg-cover flex justify-center pt-[55vh] ">
        <div className="flex flex-col gap-6 text-center w-[60%]">
          <h2 className="font-heading text-[24px] ">Graphic Design</h2>
          <p className="font-body text-[18px]">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and capture's potential clients
            attention.
          </p>
        </div>
      </div>
      <div className="flex-1 bg-second-service bg-cover flex justify-center">
        <div className="flex flex-col gap-6 items-center text-center w-[60%] pt-[55vh]">
          <h2 className="font-heading text-[24px] ">Photography</h2>
          <p className="font-body text-[18px]">
            Increase credibility by getting the most stunning, high-quality
            photos that improve your busines image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicServices;
