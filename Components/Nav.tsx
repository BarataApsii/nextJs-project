import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className='w-[100%] top-0 h-[12vh] bg-black shadow-md'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className="flex-[0.6] text-white font-bold cursor-pointer text-3xl">
          KU
          <span className='text-yellow-300'>IA</span>
        </h1>
        <div className='nav-link font-bold'>HOME</div>
        <div className='nav-link font-bold'>ABOUT</div>
        <div className='nav-link font-bold'>SERVICES</div>
        <div className='nav-link font-bold'>PROJECTS</div>
        <div className='nav-link font-bold'>CONTACTS</div>
        <div onClick={openNav}>
          <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300' />
        </div>
      </div>
    </div>
  )
}

export default Nav;
