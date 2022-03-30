import React from 'react';

const Homepage = () => {
  return (
    <div className='flex flex-col justify-center h-[80vh] items-center'>
      <h1 className='font-mono text-xl md:text-5xl'>Welcome to Crypto Cafe</h1>
      <button className='py-3 px-5 bg-cyan-500 text-white mt-3 rounded-full'>Explore Coin</button>
    </div>
  );
};

export default Homepage;