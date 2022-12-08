import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <div
      className='flex flex-col gap-10 justify-center items-center p-6 max-w-4xl m-auto h-[calc(100vh-64px)]'
      id='about'
    >
      <h1 className='text-primary-color text-6xl md:leading-tight font-bold md:text-7xl dark:text-secondary-color'>
        I specialize in{' '}
        <motion.span
          className='text-secondary-color'
          whileInView={{
            opacity: [0, 1],
            color: '#ff0049',
          }}
          transition={{
            duration: 1,
          }}
        >
          Front-End
        </motion.span>{' '}
        Web Development and{' '}
        <motion.span
          className='text-secondary-color'
          whileInView={{
            opacity: [0, 1],
            color: '#ff0049',
          }}
          transition={{
            duration: 1,
          }}
        >
          UI/UX
        </motion.span>{' '}
        Design.
      </h1>
    </div>
  );
};

export default About;
