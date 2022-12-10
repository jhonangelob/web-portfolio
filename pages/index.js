import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects.jsx';

export default function Home() {
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
        <Projects />
        <Experience />
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
