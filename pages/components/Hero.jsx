import React from 'react';

const Hero = () => {
  return (
    <div className='flex items-end p-5 max-w-6xl m-auto h-screen'>
      {/* <h1 className='font-extrabold text-6xl text-accent-color  max-w-7xl md:text-9xl'>
        jhn.
      </h1> */}
      <h1 className='text-primary-color font-semibold mb-40 text-5xl max-w-4xl md:text-6xl dark:text-white-color'>
        Hello, my name is Jhon Angelo Bustarde and I am a Web Developer.
      </h1>

      {/* <div className='mb-40'>
        <button className='bg-accent-color'>Let&apos;s Talk</button>
        <button className='bg-bg-color'>Let&apos;s Talk</button>
      </div> */}
    </div>
  );
};

export default Hero;
