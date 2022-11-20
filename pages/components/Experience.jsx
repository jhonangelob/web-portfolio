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

const frontend = [html, css, javascript, reactjs, sass, nextjs];
const backend = [nodejs, firebase];
const others = [git, npm, figma, contentful];

function Experience() {
  return (
    <div className='flex flex-col justify-center max-w-6xl gap-10 m-auto p-5 h-screen'>
      <h1 className='text-5xl font-bold text-secondary-color md:max-w-2xl md:text-7xl'>
        My Web Development <span className='text-gray-color'>Technologies</span>{' '}
        and <span className='text-gray-color'>Experience</span>.
      </h1>
      <div className='flex flex-col w-full gap-5 md:flex-row text-secondary-color'>
        <div className='md:w-3/6 flex flex-col gap-y-5'>
          <h3 className='text-accent-color'>Technologies</h3>
          <p className='italic'>
            The technologies I use for front-end development
          </p>
          <div className='flex gap-5 flex-wrap'>
            {frontend?.map((item, index) => (
              <Image
                key={index}
                className='md:grayscale md:hover:grayscale-0'
                src={item}
                alt={item}
                width={40}
                height={40}
              />
            ))}
          </div>
          <p className='italic'>
            The technologies I use for back-end development
          </p>
          <div className='flex gap-5'>
            {backend?.map((item, index) => (
              <Image
                key={index}
                className='md:grayscale md:hover:grayscale-0'
                src={item}
                alt={item}
                width={40}
                height={40}
              />
            ))}
          </div>
          <p className='italic'>others...</p>
          <div className='flex gap-5'>
            {others?.map((item, index) => (
              <Image
                key={index}
                className='md:grayscale md:hover:grayscale-0'
                src={item}
                alt={item}
                width={40}
                height={40}
              />
            ))}
          </div>
        </div>
        <div className='md:w-3/6 flex flex-col gap-2'>
          <h3 className='text-accent-color'>Experience/s</h3>
          <p>2022</p>
          <h3 className='text-white-color font-medium'>Web Developer Intern</h3>
          <p>Symph, Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
