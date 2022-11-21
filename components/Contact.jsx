import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

const links = [
  'https://www.linkedin.com/in/jhonangelob',
  'https://github.com/jhonangelob',
  'https://www.facebook.com/sqmbi',
];

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      className='flex flex-col max-w-4xl justify-center min-h-screen p-5 m-auto'
      id='contact'
    >
      <h1 className='font-bold text-6xl mb-10 text-center text-black-color md:text-9xl'>
        Contact
      </h1>
      <h3 className='text-2xl font-bold mb-5 md:text-3xl text-secondary-color'>
        Any <span className='text-black-color'>Question?</span>
      </h3>
      <div className='w-100 flex flex-col gap-10 md:flex-row '>
        <div className='w-100 md:w-4/6'>
          <h3 className='font-semibold mb-4'>
            Leave me a <span className='text-accent-color'>message</span>
          </h3>
          <form action='' className='flex flex-col gap-4 text-base font-light'>
            <input
              type='text'
              name='email'
              className='p-3 bg-bg-color border-secondary-color border-b outline-none'
              placeholder='Full Name'
            />
            <input
              type='text'
              className=' p-3 bg-bg-color border-secondary-color border-b outline-none'
              placeholder='Email'
            />
            <textarea
              className='p-3  bg-bg-color border-secondary-color border-b outline-none'
              placeholder='Your Messsage'
              rows='4'
            />
            <button className='p-3 w-100 font-semibold bg-accent-color md:w-3/6 md:self-end'>
              SEND
            </button>
          </form>
        </div>
        <div className='w-100 gap-5 flex flex-col text-gray-color items-center md:w-2/6 md:items-start md:pl-4'>
          <h1 className='font-semibold text-3xl text-white-color'>
            Let&apos;s talk about anything.
          </h1>
          <div className='flex flex-col text-sm gap-2'>
            <p>You can learn more about me on my Resume.</p>
            <button className='text-accent-color font-semibold text-center md:text-left'>
              Grab a copy
            </button>
          </div>
          <div className='flex flex-col text-sm gap-1 items-center md:items-start'>
            <h3 className='font-bold'>Stay Connected</h3>
            <span>Calamba, Laguna</span>
            <span>bustarde.aj@gmail.com</span>
          </div>
          <div className='flex flex-row gap-2'>
            {links.map((link, index) => (
              <SocialIcon
                key={`${link}-${index}`}
                className='dark:fill-white-color '
                url={link}
                fgColor='primary-color'
                bgColor='transparent'
                style={{ width: 35, height: 35 }}
              />
            ))}
          </div>
          <div
            className='flex flex-col gap items-center cursor-pointer'
            onClick={scrollToTop}
          >
            <FaChevronUp
              className='flex md:hidden fill-white-color'
              style={{
                width: 15,
                height: 15,
              }}
            />
            <span className='font-semibold text-white-color text-sm text-center'>
              BACK TO TOP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
