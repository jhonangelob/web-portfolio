import { useTheme } from 'next-themes';
import Head from 'next/head';
import React, { useEffect } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects.jsx';

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    let isMounted = true;
    window.addEventListener('scroll', () => {
      window.scrollY >= window.innerHeight * 0.4
        ? setTheme('dark')
        : setTheme('light');
    });
    return () => (isMounted = false);
  }, [setTheme]);

  return (
    <div className='min-h-screen dark:bg-background-color'>
      <Head>
        <title>jhn</title>
        <meta
          name='description'
          content='Jhon Angelo Bustarde | Web Developer'
        />
      </Head>
      <Header />
      <section className='bg-light-color dark:bg-background-color '>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
