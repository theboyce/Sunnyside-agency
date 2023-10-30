import React from 'react';
import MilkBottles from '../assets/desktop/image-gallery-milkbottles.jpg';
import Orange from '../assets/desktop/image-gallery-orange.jpg';
import SugarCubes from '../assets/desktop/image-gallery-sugarcubes.jpg';
import Cone from '../assets/desktop/image-gallery-cone.jpg';

const Gallery = () => {
  return (
    <div className=" grid grid-cols-2 md:flex  md:h-[60vh]">
      <img src={MilkBottles} alt="" className="md:flex-1 object-cover" />
      <img src={Orange} alt="" className="col- md:flex-1 object-cover" />
      <img src={Cone} alt="" className="flex-1 object-cover" />
      <img src={SugarCubes} alt="" className="flex-1 object-cover" />
    </div>
  );
};

export default Gallery;
