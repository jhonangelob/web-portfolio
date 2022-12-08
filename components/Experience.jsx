import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

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
} from '../assets/_index';

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

function Experience() {
  return (
    <div className='flex flex-col justify-center max-w-4xl gap-10 m-auto p-6 min-h-screen'>
      <h1 className='text-5xl font-bold leading-tight text-secondary-color md:text-7xl'>
        My Development{' '}
        <motion.span
          whileInView={{
            opacity: [0, 1],
            color: ['#c4c4c4c4', '#ffffff'],
          }}
          transition={{
            duration: 1,
          }}
        >
          Technologies
        </motion.span>{' '}
        and{' '}
        <motion.span
          whileInView={{
            opacity: [0, 0.5, 1],
            color: ['#696969', '#c4c4c4'],
          }}
          transition={{
            duration: 1,
          }}
        >
          Experiences
        </motion.span>
        .
      </h1>
      <div className='flex flex-col w-full md:flex-row md:justify-between text-secondary-color'>
        <div className='md:w-4/6 flex flex-col gap-4 mb-4'>
          <motion.h3
            className='text-accent-color'
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
          <p className='italic text-light-color'>
            The technologies I use for front-end and back-end development.
          </p>
          <motion.div
            className='flex gap-6 flex-wrap my-4'
            whileInView={{
              opacity: [0, 1],
              transition: {
                duration: 1,
              },
            }}
          >
            {technologies?.map((item, index) => (
              <div
                key={index}
                style={{
                  width: '35px',
                  height: '35px',
                  position: 'relative',
                }}
              >
                <Image
                  key={index}
                  className='md:hover:scale-110 transition ease-in-out duration-200 cursor-pointer'
                  src={item}
                  alt={item}
                  layout='fill'
                />
              </div>
            ))}
          </motion.div>
          <p className='italic text-light-color'>others...</p>
          <motion.div
            className='flex gap-6 flex-wrap my-4'
            whileInView={{
              opacity: [0, 1],
              transition: {
                duration: 1,
                delay: 0.25,
              },
            }}
          >
            {others?.map((item, index) => (
              <div
                key={index}
                style={{ width: '35px', height: '35px', position: 'relative' }}
              >
                <Image
                  key={index}
                  className='md:hover:scale-110 transition ease-in-out duration-200 cursor-pointer'
                  src={item}
                  alt={item}
                  layout='fill'
                />
              </div>
            ))}
          </motion.div>
        </div>
        <div className='md:w-2/6 flex flex-col overflow-hidden gap-4'>
          <motion.h3
            className='text-accent-color'
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
            <div className='item-center'>
              <h3 className='text-light-color font-medium'>
                Web Developer Intern
              </h3>
              <p className='text-sm'>Symph, Inc.</p>
              <p className='text-sm'>Mar 2022 - Jul 2022</p>
            </div>
            <motion.div
              className='items-center border-l-4 border-accent-color pl-4'
              whileInView={{
                opacity: [0, 1],
                y: [20, 0],
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <h3 className='text-light-color font-medium'>
                Junior Software Engineer
              </h3>
              <p className='text-sm'>Everbank Vananaz Inc.</p>
              <p className='text-sm'>Jan 2023 - Present</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
