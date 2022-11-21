import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <div className='flex flex-col justify-center p-5 max-w-6xl m-auto h-screen'>
      <h1 className='text-primary-color text-5xl leading-normal font-bold md:text-8xl dark:text-secondary-color'>
        I specializes in{' '}
        <motion.span
          className='text-secondary-color'
          whileInView={{
            color: '#ff0049',
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          Front-End
        </motion.span>{' '}
        Web Development and{' '}
        <motion.span
          className='text-secondary-color'
          whileInView={{
            color: '#ff0049',
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
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
