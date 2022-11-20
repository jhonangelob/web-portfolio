import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import React from 'react';
import Experience from './components/Experience';

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();

  const changeBackgroundColor = () => {
    window.scrollY >= window.outerHeight * 0.6
      ? setTheme('dark')
      : setTheme('light');
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor);
  });

  return (
    <React.Fragment>
      <Head>
        <title>jhn</title>
        <meta
          name='description'
          content='Jhon Angelo Bustarde | Web Developer'
        />
      </Head>
      <Header />
      <section className='max-w-screen dark:bg-bg-color'>
        <Hero />
        <About />
        <Projects />
        <Experience />
        {/* Contact Me */}
      </section>
    </React.Fragment>
  );
}
