import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

const About = ({ setIsLight }) => {
  return (
    <div
      className='flex flex-col gap-20 justify-center items-center max-w-4xl p-6 mx-auto min-h-screen md:pt-32 md:pb-16 md:min-h-fit'
      id='about'
    >
      <div className=''>
        <h1 className='text-6xl font-bold text-primary-color dark:text-secondary-color md:leading-tight md:text-7xl'>
          &quot;I specialize in{' '}
          <motion.span
            className='text-secondary-color'
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
            className='text-secondary-color'
            whileInView={{
              color: '#ff0049',
            }}
            transition={{
              duration: 0.5,
            }}
          >
            UI/UX
          </motion.span>{' '}
          Design.&quot;
        </h1>
      </div>
      <div
        className='transition-all duration-500 flex flex-col border-2 self-end border-secondary-color p-10 gap-y-20 md:w-4/6'
        onMouseEnter={() => setIsLight(true)}
        onMouseLeave={() => setIsLight(false)}
      >
        <h1 className='text-4xl font-semibold text-dark-color dark:text-light-color'>
          &quot;I like minimalist design that makes utilizes white space.&quot;
        </h1>
        <Link
          href='#projects'
          className='items-center self-end w-fit text-lg font-medium text-dark-color dark:text-light-color cursor-pointer'
        >
          <motion.button
            className='flex flex-row items-center gap-2'
            whileHover={{
              x: [0, 10],
              transition: {
                duration: 0.2,
              },
            }}
          >
            Projects <FaChevronRight />
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default About;
