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
  nodejs,
  npm,
  reactjs,
  sass,
  tailwindcss,
} from '../assets/_index';

const frontend = [html, css, javascript, reactjs, sass, nextjs, tailwindcss];
const backend = [nodejs, firebase];
const others = [git, npm, figma, contentful];

function Experience() {
  return (
    <div className='flex flex-col justify-center max-w-6xl gap-10 m-auto p-5 min-h-screen'>
      <h1 className='text-5xl font-bold text-secondary-color md:max-w-2xl md:text-7xl'>
        My Web Development{' '}
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
          Experience
        </motion.span>
        .
      </h1>
      <div className='flex flex-col w-full gap-10 md:flex-row text-secondary-color'>
        <div className='md:w-3/6 flex flex-col gap-4'>
          <h3 className='text-accent-color'>Technologies</h3>
          <p className='italic'>
            The technologies I use for front-end development
          </p>
          <motion.div
            className='flex gap-5 flex-wrap'
            whileInView={{
              opacity: [0, 1],
              transition: {
                duration: 1,
              },
            }}
          >
            {frontend?.map((item, index) => (
              <div
                key={index}
                style={{ width: '40px', height: '40px', position: 'relative' }}
              >
                <Image
                  className='md:grayscale md:hover:grayscale-0'
                  src={item}
                  alt={item}
                  layout='fill'
                />
              </div>
            ))}
          </motion.div>
          <p className='italic mt-4'>
            The technologies I use for back-end development
          </p>
          <motion.div
            className='flex flex-row gap-5'
            whileInView={{
              opacity: [0, 1],
              transition: {
                duration: 1,
              },
            }}
          >
            {backend?.map((item, index) => (
              <div
                key={index}
                style={{ width: '40px', height: '40px', position: 'relative' }}
              >
                <Image
                  key={index}
                  className='md:grayscale md:hover:grayscale-0'
                  src={item}
                  alt={item}
                  layout='fill'
                />
              </div>
            ))}
          </motion.div>
          <p className='italic mt-4'>others...</p>
          <motion.div
            className='flex gap-5'
            whileInView={{
              opacity: [0, 1],
              transition: {
                duration: 1,
              },
            }}
          >
            {others?.map((item, index) => (
              <div
                key={index}
                style={{ width: '40px', height: '40px', position: 'relative' }}
              >
                <Image
                  key={index}
                  className='md:grayscale md:hover:grayscale-0'
                  src={item}
                  alt={item}
                  width={40}
                  height={40}
                />
              </div>
            ))}
          </motion.div>
        </div>
        <div className='md:w-3/6 flex flex-col gap-2'>
          <h3 className='text-accent-color'>Experience/s</h3>
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [20, 0],
              transition: {
                duration: 0.5,
              },
            }}
          >
            <p>2022</p>
            <h3 className='text-white-color font-medium'>
              Web Developer Intern
            </h3>
            <p>Symph, Inc.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
