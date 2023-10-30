import React from 'react';
import Emily from '../assets/image-emily.jpg';
import Jennie from '../assets/image-jennie.jpg';
import Thomas from '../assets/image-thomas.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      image: Emily,
      name: 'Emily R.',
      testimony:
        'We put our turst in Sunnyside and they delivered, making sure our needs are met and deadlines were always hit.',
      role: 'Marketing Director',
    },

    {
      image: Jennie,
      name: 'Thomas S. ',
      testimony:
        'Sunnyside`s enthusiasm coupled with their keen interest in our brand`s success made it a satsifying and enjoyable experience.',
      role: 'Chief Operating Officer',
    },

    {
      image: Thomas,
      name: 'Jennie F.',
      testimony:
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      role: 'Business Owner',
    },
  ];

  return (
    // Main container for the section
    <div className="h-[1050px] md:h-[90vh] bg-white flex flex-col justify-center gap-14 items-center ">
      <h1 className="font-heading text-[18px] md:text-[20px] tracking-widest text-grayish-blue">
        CLIENT TESTIMONIALS
      </h1>
      {/*Container for the testimonials */}
      <div className="flex flex-col gap-12 md:gap-6 md:flex-row items-center w-[84%] ">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="flex flex-col gap-6 items-center w-[80%] md:w-[30%]"
          >
            <img
              src={testimonial.image}
              alt=""
              className="h-[50px] w-[50px] rounded-full"
            />
            <p className="font-body text-[18px] text-center text-very-dark-grayish-blue leading-6">
              {testimonial.testimony}
            </p>
            <div className="flex flex-col gap-3 items-center">
              <h3 className="font-heading text-[18px] text-very-dark-desaturated-blue">
                {testimonial.name}
              </h3>
              <p className="font-body text-[14px] text-grayish-blue">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
