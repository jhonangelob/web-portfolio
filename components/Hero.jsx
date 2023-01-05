import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='relative flex flex-col-reverse md:flex-row max-w-4xl justify-center md:items-center p-6 md:py-14 mx-auto min-h-screen md:min-h-fit gap-20'>
      <div className='flex flex-col w-6/6 md:w-3/6 gap-y-10'>
        <div className='relative flex flex-col md:mt-10 md:w-5/6 self-end gap-6'>
          <motion.p
            className='md:text-right text-primary-color dark:text-gray-color uppercase z-10 font-medium'
            whileInView={{
              opacity: [0, 1],
              y: [20, 0],
              transition: { duration: 0.5 },
            }}
          >
            A frontend focused software engineer based in the philippines, with
            a bachelor in information technology from the country&apos;s first
            polytechnic university.
          </motion.p>
          <motion.p
            className='text-right text-secondary-color uppercase z-10 font-medium'
            whileInView={{
              opacity: [0, 1],
              y: [20, 0],
              transition: { duration: 0.5 },
            }}
          >
            Currently focused on Web/Mobile Development using React
            Technologies.
          </motion.p>
        </div>
        <motion.div
          className='flex justify-center md:justify-end'
          whileInView={{
            opacity: [0, 1],
            x: [-40, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Link
            href='#about'
            className='md:text-right text-primary-color dark:text-light-color border-b-2 md:border-r-2 md:border-b-0 md:pb-0 border-accent-color pb-2 uppercase md:pr-4'
          >
            Find out more
          </Link>
        </motion.div>
      </div>
      <div className='relative w-6/6 md:w-3/6'>
        <h1 className='text-8xl md:text-9xl font-semibold text-dark-color dark:text-light-color justify-end z-50'>
          Hello<span className='text-accent-color'>.</span>
          <br /> I am
          <br /> Jhon
        </h1>
      </div>
    </div>
  );
};

export default Hero;
