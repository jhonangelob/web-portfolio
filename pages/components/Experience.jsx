import React from 'react';

const Experience = () => {
  return (
    <div className='flex flex-col justify-center max-w-6xl gap-10 m-auto p-5 h-screen'>
      <h1 className='text-5xl font-bold text-secondary-color md:max-w-2xl md:text-7xl'>
        My Web Development <span className='text-gray-color'>Technologies</span>{' '}
        and <span className='text-gray-color'>Experience</span>.
      </h1>
      <div className='flex flex-col w-full gap-5 md:flex-row'>
        <div className='md:w-3/6 outline-dotted'>Left</div>
        <div className='md:w-3/6 outline-dotted'>Right</div>
      </div>
    </div>
  );
};

export default Experience;
