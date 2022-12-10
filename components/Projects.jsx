const Projects = ({ projects }) => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-dark-color'>
      <div className='mx-w-5xl'>
        <h1 className='font-bold text-6xl text-black-color md:text-9xl'>
          {projects?.map((project, index) => (
            <div key={index}>{project.fields.name}</div>
          ))}
        </h1>
        <div>
          <div className='card'></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
