import { motion } from 'framer-motion';
import Link from 'next/link';

const links = [
  'https://www.linkedin.com/in/jhonangelob',
  'https://github.com/jhonangelob',
  'https://www.facebook.com/sqmbi',
];

const navLinks = ['hero', 'about', 'experience', 'contact'];
const Header = () => {
  return (
    <header className='transition duration-300 sticky top-0 min-w-screen z-20 p-6 cursor-pointer bg-light-color dark:bg-background-color'>
      <div className='flex flex-row max-w-5xl mx-auto overflow-hidden items-center justify-between md:overflow-visible '>
        <motion.div
          className='flex flex-row items-center'
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Link
            href='/'
            className='text-xl md:text-2xl font-bold text-dark-color dark:text-light-color'
          >
            jhn
          </Link>
        </motion.div>
        <motion.div
          className='flex gap-12 items-center'
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Link
            href='#contact'
            className='uppercase font-semibold text-xs md:text-sm border-secondary-color text-dark-color dark:text-light-color'
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
