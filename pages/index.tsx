import React, { useState } from 'react';
import Nav from '../Components/Nav'; // Directly from the Components folder
import MobileNav from '../Components//MobileNav';
import Hero from '../Components/Hero';

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className='overflow-x-hidden'>
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Nav openNav={openNav}/>
      <Hero />
    </div>
  );
};

export default HomePage;