import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-start items-center p-6 gap-10 max-w-4xl m-auto h-[calc(100vh-64px)]'>
      <div className='md:w-5/6 flex flex-col gap-4'>
        <motion.h1
          className='text-dark-color font-bold text-3xl'
          whileInView={{
            opacity: [0, 1],
            y: [-20, 0],
            transition: {
              duration: 0.5,
            },
          }}
        >
          Hello, I&apos;m
        </motion.h1>
        <motion.h1
          className='text-gray-color font-bold text-8xl'
          whileInView={{
            opacity: [0, 1],
            y: [-20, 0],
            transition: {
              duration: 0.5,
            },
          }}
        >
          Jhon Angelo
        </motion.h1>
        <motion.p
          className='text-justify text-secondary-color'
          whileInView={{
            opacity: [0, 1],
            transition: {
              duration: 0.5,
            },
          }}
        >
          A Junior Software Engineer with a Bachelor of Information Technology
          degree from the Philippines&apos; first Polytechnic University.
          <br />
          Currently focused on Web/Mobile Development using React Technologies.
        </motion.p>
        <motion.li
          className='list-none mt-4 w-fit'
          whileHover={{
            x: [0, 10],
            transition: {
              duration: 0.2,
            },
          }}
        >
          <Link
            href='#about'
            className='uppercase w-fit font-medium p-2 border-l-4 items-center border-accent-color active:outline-none focus:outline-none text-light-color'
          >
            Scroll for More
          </Link>
        </motion.li>
      </div>
      {/* <div className='w-3/6'></div> */}
      {/* <motion.h1
        className='text-primary-color font-bold text-5xl max-w-4xl mb-40 md:text-6xl dark:text-white-color'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Hello, it&apos;s me <br />
        jhn
        <br />
        I&apos;m a{' '}
        <span className='text-accent-color'>
          Web/Mobile Application Developer
        </span>
        .
      </motion.h1> */}
    </div>
  );
};

export default Hero;
