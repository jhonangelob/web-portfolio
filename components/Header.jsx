import { motion } from 'framer-motion';

const links = [
  'https://www.linkedin.com/in/jhonangelob',
  'https://github.com/jhonangelob',
  'https://www.facebook.com/sqmbi',
];

const Header = () => {
  return (
    <header className='sticky top-0 min-w-screen z-20 p-6 md:px-6 md:py-4 cursor-pointer text-light-color bg-background-color opacity-95'>
      <div className='flex flex-row max-w-5xl mx-auto overflow-hidden items-center justify-between md:overflow-visible '>
        <motion.div
          className='flex flex-row items-center'
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p className='text-2xl font-bold'>jhn</p>
        </motion.div>

        <motion.div
          className='flex flex-row items-center cursor-pointer'
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <Link
            href='#contact'
            className='flex flex-row items-center cursor-pointer gap-2'
          >
            <FaBars
              className='dark:fill-light-color fill-black-color mr-2'
              style={{ width: 20, height: 20 }}
            />
          </Link> */}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
