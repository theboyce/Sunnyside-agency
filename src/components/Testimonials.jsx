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
        'We put our turst in Sunnyside and they delivered, making sure our needs are met and deadlines were always hit.',
      role: 'Marketing Director',
    },

    {
      image: Thomas,
      name: 'Jennie F.',
      testimony:
        'We put our turst in Sunnyside and they delivered, making sure our needs are met and deadlines were always hit.',
      role: 'Marketing Director',
    },
  ];

  return (
    // Main container for the section
    <div className="h-[90vh] bg-white flex flex-col justify-center gap-12 items-center ">
      <h1 className="font-heading text-[20px] ">CLIENT TESTIMONIALS</h1>
      {/*Container for the testimonials */}
      <div className="flex justify-between w-[80%] ">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="flex flex-col gap-6 items-center w-[30%]">
            <img
              src={testimonial.image}
              alt=""
              className="h-[50px] w-[50px] rounded-full"
            />
            <p className="font-body text-[18px] text-center">
              {testimonial.testimony}
            </p>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="font-heading text-[18px]">{testimonial.name}</h3>
              <p className="font-body text-[14px]">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
