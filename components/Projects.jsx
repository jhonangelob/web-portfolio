import { motion } from 'framer-motion';
import Link from 'next/link';
const Projects = ({ projects }) => {
  return (
    <div className='flex flex-col justify-center items-center max-w-4xl px-6 mx-auto my-auto md:my-16 min-h-fit'>
      <h1 className='font-extrabold self-start md:self-center text-6xl text-dark-color dark:text-light-color mb-10 md:text-8xl font-gilroy'>
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
            className='flex flex-col p-6 pl-0 border-b border-secondary-color group cursor-pointer h-full'
          >
            <Link
              href={project.fields.projectLink}
              className='text-dark-color dark:text-light-color font-extrabold group-hover:text-accent-color text-xl mb-4 font-gilroy transition-all duration-300'
            >
              {project.fields.name}
            </Link>
            <div className='flex flex-col gap-1 md:gap-2 h-full'>
              <p className='text-primary-color dark:text-light-color text-sm'>
                {project.fields.description}
              </p>
              <div className='flex gap-2 flex-wrap'>
                {project.fields.technology.map((tech, index) => (
                  <span
                    key={index}
                    className='uppercase text-secondary-color text-xs font-medium'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex gap-6 text-sm mt-4 md:mt-auto'>
                <Link
                  href={project.fields.codeLink}
                  className='text-accent-color underline'
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
