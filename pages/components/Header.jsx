import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaRegEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const links = [
  'https://www.linkedin.com/in/jhonangelob',
  'https://github.com/jhonangelob',
  'https://www.facebook.com/sqmbi',
];

const Header = () => {
  return (
    <header
      className='
      sticky top-0 flex items-center bg-white-color p-5 justify-between max-w-7xl mx-auto z-20 cursor-pointer dark:bg-bg-color'
    >
      <motion.div
        className='flex flex-row items-center'
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {links.map((link, index) => (
          <SocialIcon
            key={`${link}-${index}`}
            className='dark:fill-white-color '
            url={link}
            fgColor='primary-color'
            bgColor='transparent'
            style={{ width: 40, height: 40 }}
          />
        ))}
      </motion.div>

      <motion.div
        className='flex flex-row items-center cursor-pointer'
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Link
          href='#contact'
          className='flex flex-row items-center cursor-pointer gap-2'
        >
          <FaRegEnvelope
            className='dark:fill-white-color '
            fgColor='primary-color'
            bgColor='transparent'
            style={{ width: 20, height: 20 }}
          />
          <p className='font-semibold text-sm text-primary-color uppercase hidden md:inline-flex dark:text-white-color'>
            Get in Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
