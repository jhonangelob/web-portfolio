import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='flex justify-center items-center p-5 h-screen'>
      <h1 className='text-primary-color text-5xl leading-normal max-w-6xl m-auto font-bold md:text-8xl dark:text-secondary-color'>
        I specializes in{' '}
        <motion.span
          whileInView={{
            color: '#ff0049',
          }}
          transition={{
            duration: 0.5,
          }}
        >
          Front-End
        </motion.span>{' '}
        Web Development and{' '}
        <motion.span
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
