import { motion } from 'framer-motion';
import { React } from 'react';
import { SocialIcon } from 'react-social-icons';

const links = [
  'https://www.linkedin.com/in/jhonangelob',
  'https://github.com/jhonangelob',
  'https://www.facebook.com/sqmbi',
];

const animateY = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, y: 40 },
};

const Contact = () => {
  return (
    <div
      className='flex flex-col max-w-4xl justify-center min-h-screen p-5 m-auto md:mt-0'
      id='contact'
    >
      <h1 className='font-bold text-6xl mb-10 text-center text-black-color md:text-9xl'>
        Contact
      </h1>
      <motion.h3
        whileInView={{ opacity: [0, 1], x: [-20, 0] }}
        transition={{ duration: 1 }}
        className='text-2xl font-bold mb-5 md:text-3xl text-secondary-color'
      >
        Any <span className='text-black-color'>Question?</span>
      </motion.h3>
      <div className='w-100 flex flex-col gap-10 md:flex-row '>
        <div className='w-100 md:w-4/6'>
          <motion.h3
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className='font-semibold mb-4'
          >
            Leave me a <span className='text-accent-color'>message</span>
          </motion.h3>
          <motion.form
            whileInView={{ opacity: [0, 1], y: [40, 0] }}
            transition={{ duration: 0.75 }}
            action=''
            className='flex flex-col gap-4 text-base font-light'
          >
            <input
              type='text'
              name='email'
              className='p-3 bg-bg-color border-secondary-color border-b outline-none active:border-b-accent-color focus:border-b-accent-color'
              placeholder='Name'
            />
            <input
              type='text'
              className=' p-3 bg-bg-color border-secondary-color border-b outline-none active:border-b-accent-color focus:border-b-accent-color'
              placeholder='Email'
            />
            <textarea
              className='p-3 bg-bg-color border-secondary-color border-b outline-none active:border-b-accent-color focus:border-b-accent-color resize-none'
              placeholder='Your Messsage'
              rows='4'
            />
            <button className='p-3 w-100 font-semibold bg-accent-color md:w-3/6 md:self-end'>
              SEND
            </button>
          </motion.form>
        </div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={animateY}
          className='w-100 gap-2 flex flex-col text-center md:text-left text-gray-color items-center md:w-2/6 md:items-start md:pl-4'
        >
          <h1 className='font-semibold text-3xl text-white-color '>
            Let&apos;s talk about anything.
          </h1>
          <div className='flex flex-col text-sm gap-2 '>
            <p>You can learn more about me on my Resume.</p>
            <button className='text-accent-color text-lg font-semibold text-center md:text-left'>
              Grab a copy
            </button>
          </div>
          <div className='flex flex-col text-sm gap-1 items-center md:items-start'>
            <span>Calamba, Laguna</span>
            <span>bustarde.aj@gmail.com</span>
          </div>
          <div className='flex flex-row gap-2'>
            {links.map((link, index) => (
              <SocialIcon
                key={`${link}-${index}`}
                className='fill-white-color '
                url={link}
                fgColor='primary-color'
                bgColor='transparent'
                style={{ width: 35, height: 35 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
