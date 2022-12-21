import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-start items-center p-6 gap-10 max-w-4xl mx-auto min-h-screen'>
      <div className='md:w-5/6 flex flex-col gap-4'>
        <motion.h1
          className='text-secondary-color font-bold text-3xl'
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
          className='text-secondary-color uppercase font-medium'
          whileInView={{
            opacity: [0, 1],
            transition: {
              duration: 0.5,
            },
          }}
        >
          A frontend focused Junior software engineer based in the philippines,
          with a bachelor in information technology from the country&apos;s
          first polytechnic university.
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
            Find Out More
          </Link>
        </motion.li>
      </div>
    </div>
  );
};

export default Hero;
