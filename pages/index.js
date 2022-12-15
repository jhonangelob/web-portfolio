import { createClient } from 'contentful';
import Head from 'next/head';
import { useState } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects.jsx';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const resume = await client.getEntries({
    content_type: 'resume',
  });

  const projects = await client.getEntries({
    content_type: 'projects',
    order: 'sys.createdAt',
  });

  const experiences = await client.getEntries({
    content_type: 'experiences',
    order: 'sys.createdAt',
  });

  return {
    props: {
      resume: resume.items,
      projects: projects.items,
      experiences: experiences.items,
    },
  };
};

export default function Home({ resume, projects, experiences }) {
  const [isLight, setIsLight] = useState(false);
  return (
    <div className={`min-h-screen ${isLight ? 'light' : 'dark'}`}>
      <Head>
        <title>jhn</title>
        <meta
          name='description'
          content='Jhon Angelo Bustarde | Web Developer'
        />
      </Head>
      <Header />
      <section className='transition-all duration-300 bg-light-color dark:bg-background-color'>
        <Hero />
        <About setIsLight={setIsLight} />
        <Projects projects={projects} />
        <Experience experiences={experiences} />
        <Contact resume={resume} />
        <Footer />
      </section>
    </div>
  );
}
