import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import { sendEmail } from '../configs/sendEmail';

const Contact = ({ resume }) => {
  let download = resume[0].fields.file.fields.file.url;
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSending(true);
    sendEmail(form.current)
      .then((response) => setIsSending(false))
      .catch((error) => setIsSending(false));
    e.target.reset();
  };

  return (
    <div
      className='flex flex-col max-w-4xl justify-center p-6 mx-auto my-8 min-h-screen md:min-h-fit'
      id='contact'
    >
      <h1 className='font-bold text-6xl mb-10 text-center text-dark-color dark:text-light-color md:text-8xl'>
        Contact
      </h1>
      <motion.h3
        whileInView={{ opacity: [0, 1], x: [-60, 0] }}
        transition={{ duration: 0.5 }}
        className='text-xl md:text-2xl font-bold mb-5 text-dark-color dark:text-light-color'
      >
        Any Question?
      </motion.h3>
      <div className='w-100 flex flex-col gap-10 md:flex-row '>
        <div className='w-100 md:w-4/6'>
          <motion.h3
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='font-semibold mb-4 text-accent-color text-sm md:text-base'
          >
            Leave me a message
          </motion.h3>
          <motion.form
            onSubmit={submitHandler}
            ref={form}
            whileInView={{ opacity: [0, 1], y: [60, 0] }}
            transition={{ duration: 0.5 }}
            action=''
            className='flex flex-col gap-4 text-base font-light'
          >
            <input
              type='text'
              name='name'
              className='p-3 text-sm bg-light-color dark:bg-background-color text-dark-color dark:text-light-color border-secondary-color border-b outline-none active:border-b-accent-color focus:border-b-accent-color'
              placeholder='Name'
              required
            />
            <input
              type='text'
              name='email'
              className='p-3 text-sm bg-light-color dark:bg-background-color text-dark-color dark:text-light-color border-secondary-color border-b outline-none active:border-b-accent-color focus:border-b-accent-color'
              placeholder='Email'
              required
            />
            <textarea
              name='message'
              className='p-3 text-sm bg-light-color dark:bg-background-color text-dark-color dark:text-light-color border-secondary-color border-b outline-none active:border-b-accent-color focus:border-b-accent-color resize-none'
              placeholder='Your Messsage'
              rows='4'
              required
            />
            <button
              className={`${
                isSending ? 'opacity-60' : 'opacity-100'
              } md:hover:bg-opacity-60 p-3 w-100 font-semibold text-light-color bg-accent-color md:w-3/6 md:self-end transition-all duration-200`}
              disabled={isSending}
            >
              {isSending ? 'SENDING...' : 'SEND'}
            </button>
          </motion.form>
        </div>
        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [40, 0],
            transition: {
              duration: 0.5,
            },
          }}
          className='w-100 gap-2 flex flex-col text-center md:text-left text-gray-color items-center md:w-2/6 md:items-start md:pl-4'
        >
          <h1 className='font-bold text-xl md:text-2xl text-dark-color dark:text-light-color'>
            Let&apos;s talk about it.
          </h1>
          <div className='flex flex-col text-sm gap-2 text-primary-color dark:text-gray-color'>
            <p>You can find out more about me on my Resume.</p>
            <a
              href={download}
              className='md:flex flex-row rounded-sm text-accent-color text-lg font-semibold items-center text-center gap-2 md:text-left md:hover:text-opacity-80 transition-all'
              rel='noopener noreferrer'
              target='_blank'
              download
            >
              <FaFilePdf className='hidden md:block' />
              Grab a copy
            </a>
          </div>
          <div className='flex flex-col text-xs md:text-sm gap-1 items-center md:items-start text-primary-color dark:text-gray-color'>
            <span>Calamba, Laguna</span>
            <span>bustarde.aj@gmail.com</span>
          </div>
          <div className='flex flex-row gap-2'>
            {[
              'https://www.linkedin.com/in/jhonangelob',
              'https://github.com/jhonangelob',
              'https://www.facebook.com/sqmbi',
            ].map((link, index) => (
              <SocialIcon
                key={`${link}-${index}`}
                className='dark:fill-light-color md:hover:scale-110 transition ease-in-out duration-250'
                url={link}
                fgColor='dark-color'
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
