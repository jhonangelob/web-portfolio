import { motion } from 'framer-motion';
import Image from 'next/image';

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

const Experience = ({ experiences }) => {
  return (
    <div
      className='flex flex-col justify-center max-w-4xl gap-6 p-6 mx-auto my-8 min-h-screen md:pt-32 md:pb-16 md:min-h-fit'
      id='experience'
    >
      <div className='flex flex-col gap-4'>
        <h1 className='text-5xl font-bold text-dark-color dark:text-light-color md:text-6xl overflow-hidden'>
          Technology and Experiences
        </h1>
        <motion.p
          className='text-dark-color dark:text-light-color text-sm md:text-base md:w-5/6'
          whileInView={{
            opacity: [0, 1],
            x: [-20, 0],
            transition: {
              duration: 0.5,
            },
          }}
        >
          I have used these technologies to build and maintain a variety of web
          application. I am constatly trying to enhance my knowledge and stay
          up-to-date with the latest web development trends and technologies.
        </motion.p>
      </div>
      <div className='flex flex-col md:flex-row gap-y-4'>
        <div className='md:w-4/6 flex flex-col gap-2'>
          <p className='font-medium text-accent-color'>Technologies</p>
          <p className='text-dark-color dark:text-light-color text-sm md:text-base'>
            For front-end and back-end development
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
                  className='md:hover:scale-110 transition-transform ease-in-out duration-200 cursor-pointer w-full h-auto'
                  src={item}
                  alt={item}
                />
              </div>
            ))}
          </motion.div>
          <p className='text-dark-color dark:text-light-color text-sm md:text-base'>
            others...
          </p>
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
        <div className='md:w-2/6 flex flex-col gap-2'>
          <p className='font-medium text-accent-color'>Experience/s</p>
          {experiences?.map((exp, index) => (
            <motion.div
              key={index}
              className='flex flex-col item-center gap-1 mb-2'
              whileInView={{
                opacity: [0, 1],
                y: [-20, 0],
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <p className='text-dark-color dark:text-light-color font-semibold'>
                {exp.fields.position}
              </p>
              <p className='text-sm dark:text-gray-color text-secondary-color'>
                {exp.fields.company}
              </p>
              <p className='text-sm text-secondary-color'>{exp.fields.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
