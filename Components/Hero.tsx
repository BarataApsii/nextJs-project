import React from 'react';
import Particle from './Particle';
// import TextEffects from './TextEffects';
import Image from 'next/image';
import SocialMedia from './SocialMedia';

const Hero = () => {
  return (
    <div className="h-[88vh]  bg-cover bg-center]"> 
      <Particle />
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        <div className='translate-x-10'>
          <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
            Hi, I am 
            <span className='text-yellow-400'> Apsie!</span>
          </h1>
          <p className='mt-[2rem] text-[20px] text-[#65cdec] '>
            An aspiring web developer who believes in allocating time and accomplishing the task on timely manner
          </p>

          <a href="resume.pdf">
            <button className='download-btn bg-yellow-500 text-white px-4 py-2 rounded-md translate-x-0 translate-y-5'>
              Download
            </button>
          </a>
          <div className='translate-y-10'>
            <SocialMedia />
          </div>

          {/* <TextEffects /> */}
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
