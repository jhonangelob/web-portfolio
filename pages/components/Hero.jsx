import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='flex flex-col justify-end p-5 max-w-6xl m-auto min-h-screen'>
      <motion.h1
        className='text-primary-color font-bold text-5xl max-w-4xl mb-40 md:text-6xl dark:text-white-color'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Hello, <br />I am Jhon Angelo Bustarde <br />
        I&apos;m a <span className='text-accent-color'>Web Developer</span>.
      </motion.h1>
    </div>
  );
};

export default Hero;
