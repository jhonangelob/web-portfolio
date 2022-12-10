import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      className='flex flex-col gap-10 justify-center items-center p-6 max-w-4xl m-auto h-screen'
      id='about'
    >
      <h1 className='text-6xl text-secondary-color md:leading-tight font-bold md:text-7xl'>
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
