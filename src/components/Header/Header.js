import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../Customlink/CustomLink';

const Header = () => {
  return (
    <div className=' sticky top-0  px-12 py-8 bg-slate-100 flex justify-center md:justify-between'>
      <div className='hidden md:block'>
        <Link to='/' className='font-sans font-bold text-2xl text-amber-700'>Crypto Cafe</Link>
      </div>
      <div className='flex gap-4 text-xl'>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/coins'>Coins</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
      </div>
    </div>
  );
};

export default Header;