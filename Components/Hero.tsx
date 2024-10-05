import React from 'react';
import Particle from './Particle';
import TextEffects from './TextEffects';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="h-[88vh]  bg-cover bg-center]"> 
      <Particle />
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        <div>
          <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
            Hi, I am 
            <span className='text-yellow-400'> Apsie!</span>
          </h1>
          <TextEffects />
        </div>
        <div className='w-[500px] hidden relative lg:flex items-center rounded-full h-[500px]'>
          <Image
            src="/images/barata.png"
            width={500}
            height={500} // Replace with the actual dimensions
            alt="description"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
