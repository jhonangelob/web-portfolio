import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      className='flex flex-col gap-10 justify-center items-center p-6 max-w-4xl mx-auto my-24 min-h-fit'
      id='about'
    >
      <h1 className='text-6xl font-black text-primary-color dark:text-gray-color md:leading-tight md:text-7xl'>
        I specialize in{' '}
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
        Design.
      </h1>
    </div>
  );
};

export default About;
