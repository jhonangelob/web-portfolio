import { motion } from 'framer-motion';
import Link from 'next/link';

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <div className='min-h-screen flex flex-col justify-center items-center max-w-4xl p-6 m-auto text-dark-color'>
      <h1 className='font-bold text-6xl text-center text-dark-color mb-10 md:text-9xl'>
        Projects
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full'>
        {projects?.map((project, index) => (
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [60, 0],
              transition: {
                duration: 0.5,
              },
            }}
            key={index}
            className='flex flex-col border-l-4 md:border-b-2 md:border-l-0 p-4 gap-2 md:border-secondary-color md:hover:border-accent-color border-accent-color h-full'
          >
            <h3 className='text-light-color'>{project.fields.name}</h3>
            <p className='text-secondary-color text-sm'>
              {project.fields.description}
            </p>
            <div className='flex gap-2 flex-wrap'>
              {project.fields.technology.map((tech, index) => (
                <span
                  key={index}
                  className='uppercase text-secondary-color text-xs'
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex gap-6 text-sm mt-auto justify-end md:justify-start font-medium'>
              <Link
                href={project.fields.codeLink}
                className='text-accent-color'
              >
                Source
              </Link>
              <Link
                href={project.fields.projectLink}
                className='text-gray-color'
              >
                View
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
