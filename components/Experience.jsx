import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import {
  contentful,
  css,
  figma,
  firebase,
  git,
  html,
  javascript,
  nextjs,
  npm,
  reactjs,
  sass,
  tailwindcss,
} from '../public/_index';

const technologies = [
  html,
  css,
  javascript,
  reactjs,
  sass,
  nextjs,
  tailwindcss,
  firebase,
];
const others = [git, npm, figma, contentful];

const experience = [
  {
    position: 'Web Developer Intern',
    company: 'Symph,Inc',
    date: 'March 2022 - July 2022',
  },
  {
    position: 'Junior Software Engineer',
    company: 'Everbank Vananaz Inc.',
    date: 'January 2023 - Present',
  },
];

const Experience = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  return (
    <div
      ref={container}
      className='flex flex-col justify-center max-w-4xl gap-10 p-6 mx-auto my-8 min-h-screen md:min-h-fit'
    >
      <h1
        className='text-5xl font-bold text-dark-color dark:text-light-color md:text-6xl overflow-hidden'
        style={{
          transform: isInView ? 'none' : 'translateY(100px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s',
        }}
      >
        Technologies and Experiences
      </h1>
      <div className='flex flex-col w-full md:flex-row md:justify-between text-secondary-color'>
        <div className='md:w-4/6 flex flex-col gap-4 mb-8'>
          <motion.h3
            className='text-accent-color font-semibold'
            whileInView={{
              opacity: [0, 1],
              x: [-60, 0],
              transition: {
                duration: 0.5,
              },
            }}
          >
            Technologies
          </motion.h3>
          <p className='text-light-color font-medium'>
            For front-end and back-end development.
          </p>
          <motion.div
            className='flex gap-6 flex-wrap my-4'
            whileInView={{
              opacity: [0, 1],
              y: [40, 0],
              transition: {
                duration: 0.5,
              },
            }}
          >
            {technologies?.map((item, index) => (
              <div
                key={index}
                style={{
                  width: 35,
                  height: 35,
                }}
              >
                <Image
                  key={index}
                  className='md:hover:scale-110 transition ease-in-out duration-200 cursor-pointer w-full h-auto'
                  src={item}
                  alt={item}
                />
              </div>
            ))}
          </motion.div>
          <p className='text-light-color font-medium'>others...</p>
          <motion.div
            className='flex gap-6 flex-wrap my-4'
            whileInView={{
              opacity: [0, 1],
              y: [20, 0],
              transition: {
                duration: 0.5,
              },
            }}
          >
            {others?.map((item, index) => (
              <div key={index} style={{ width: 35, height: 35 }}>
                <Image
                  key={index}
                  className='md:hover:scale-110 transition ease-in-out duration-200 cursor-pointer w-full h-auto'
                  src={item}
                  alt={item}
                />
              </div>
            ))}
          </motion.div>
        </div>
        <div className='md:w-2/6 flex flex-col overflow-hidden gap-4'>
          <motion.h3
            className='text-accent-color font-semibold'
            whileInView={{
              opacity: [0, 1],
              x: [60, 0],
              transition: {
                duration: 0.5,
              },
            }}
          >
            Experience/s
          </motion.h3>
          <div className='flex flex-col gap-6'>
            {experience?.map((exp, index) => (
              <div key={index} className='flex flex-col item-center gap-1'>
                <h3 className='text-dark-color dark:text-light-color font-semibold text-md'>
                  {exp.position}
                </h3>
                <p className='text-sm text-gray-color'>{exp.company}</p>
                <p className='text-sm text-secondary-color'>{exp.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
