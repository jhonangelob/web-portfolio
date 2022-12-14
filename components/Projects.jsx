import { motion } from 'framer-motion';
import Link from 'next/link';

const Projects = ({ projects }) => {
  return (
    <div
      className='flex flex-col justify-center items-center max-w-4xl p-6 mx-auto my-8 min-h-screen md:pt-32 md:pb-16 md:min-h-fit'
      id='projects'
    >
      <h1 className='font-bold text-6xl mb-10 text-center text-dark-color dark:text-light-color md:text-8xl'>
        Projects
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 w-full'>
        {projects?.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{
              opacity: [0, 1],
              y: [60, 0],
              transition: {
                duration: 0.5,
              },
            }}
            className='flex flex-col pt-4 pb-6 border-b border-secondary-color group cursor-pointer h-full'
          >
            <Link
              href={project.fields.projectLink}
              className='text-primary-color dark:text-light-color font-bold group-hover:text-accent-color text-lg mb-4 transition duration-300 w-fit'
            >
              {project.fields.name}
              {': '}
              {project.fields.description}
            </Link>
            <div className='flex flex-col gap-1 md:gap-2 h-full'>
              <div className='flex gap-2 flex-wrap items-center'>
                {project.fields.technology.map((tech, index) => (
                  <span
                    key={index}
                    className='uppercase text-secondary-color text-xs'
                  >
                    {tech}
                  </span>
                ))}
                <span className='text-secondary-color text-xs'>|</span>
                <Link
                  href={project.fields.codeLink}
                  className='text-accent-color uppercase text-xs underline'
                >
                  Source code
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
