import { useTheme } from 'next-themes';
import Head from 'next/head';
import React, { useEffect } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme('light');

  const changeBackgroundColor = () => {
    window.scrollY >= window.outerHeight * 0.4
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
        <Contact />
      </section>
      <Footer />
    </React.Fragment>
  );
}
