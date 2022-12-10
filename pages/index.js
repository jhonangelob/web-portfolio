import { createClient } from 'contentful';
import Head from 'next/head';
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
    select: 'fields',
  });

  return {
    props: {
      resume: resume.items,
      projects: projects.items,
    },
  };
};

export default function Home({ resume, projects }) {
  return (
    <div className='min-h-screen bg-background-color'>
      <Head>
        <title>jhn</title>
        <meta
          name='description'
          content='Jhon Angelo Bustarde | Web Developer'
        />
      </Head>
      <Header />
      <section className='bg-background-color '>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Experience />
        <Contact resume={resume} />
      </section>
      <Footer />
    </div>
  );
}
