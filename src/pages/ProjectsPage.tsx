import './ProjectsPage.css';

function ProjectsPage() {
  const projects = [
    {
      title: 'Kick Flicker',
      description: 'E-commerce website for shoes',
      techStack: ['Laravel', 'Node.js', 'PostgreSQL', 'LiveWire'],
      image: `${import.meta.env.BASE_URL}assets/kick-flicker.png`,
      source: 'github.com/FaaizHaikal/KickFlicker',
    },
    {
      title: 'Kick Support',
      description: 'Chatbot for kick flicker',
      techStack: ['React', 'Flask'],
      image: `${import.meta.env.BASE_URL}assets/kick-support.png`,
      source: 'github.com/FaaizHaikal/KickSupport',
    },
    {
      title: 'SliceIt',
      description: 'Single player game where user slice thrown fruits',
      techStack: ['Java'],
      image: `${import.meta.env.BASE_URL}assets/slice-it.png`,
      source: 'github.com/FaaizHaikal/SliceIt',
    },
  ];

  return (
    <section id="projects">
      <h2 className="heading">
        My <span>Projects</span>
      </h2>

      <div className="projects">
        {projects.map((project) => (
          <div className="project">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <h6>Tech Stack: {project.techStack.join(', ')}</h6>
              <p>{project.description}</p>
              <a
                href={`https://${project.source}`}
                target="_blank"
                rel="noreferrer"
              >
                View Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
