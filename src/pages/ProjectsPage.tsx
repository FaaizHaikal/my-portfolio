import './ProjectsPage.css';
import { useEffect, useState } from 'react';

function ProjectsPage() {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const projects = [
    {
      title: 'Spendiary',
      type: 'Mobile App',
      description:
        'A personal finance mobile app that helps users track expenses and savings. Built with secure JWT-based authentication and Go Fiber backend.',
      techStack: ['Flutter', 'Go Fiber', 'PostgreSQL'],
      image: `${import.meta.env.BASE_URL}assets/spendiary-min.webp`,
      source: 'github.com/FaaizHaikal/spendiary',
    },
    {
      title: 'Osingly',
      type: 'Mobile App',
      description:
        'A Kotlin-based app for translating Osing–Indonesian using a custom-trained NMT model (96% BLEU). Supports text and image translation.',
      techStack: ['Kotlin', 'FastAPI', 'PyTorch'],
      image: `${import.meta.env.BASE_URL}assets/osingly-min.webp`,
      source: 'github.com/FaaizHaikal/osingly',
    },
    {
      title: 'Planthis',
      type: 'Mobile App',
      description:
        'A smart tree recommendation app using geolocation and environmental data. Users get real-time suggestions based on pinned map areas.',
      techStack: ['Flutter', 'FastAPI'],
      image: `${import.meta.env.BASE_URL}assets/planthis-min.webp`,
      source: 'github.com/FaaizHaikal/planthis',
    },
    {
      title: 'KickFlicker',
      type: 'Web App',
      description: 'E-commerce website for shoes with advanced image search',
      techStack: ['Laravel', 'Node.js', 'PostgreSQL'],
      image: `${import.meta.env.BASE_URL}assets/kick-flicker-min.webp`,
      source: 'github.com/FaaizHaikal/KickFlicker',
    },
    {
      title: 'KickSupport',
      type: 'Web App',
      description: 'Chatbot for KickFlicker',
      techStack: ['React', 'Flask', 'TensorFlow'],
      image: `${import.meta.env.BASE_URL}assets/kick-support-min.webp`,
      source: 'github.com/FaaizHaikal/KickSupport',
    },
    {
      title: 'SliceIt',
      type: 'Desktop App',
      description: 'Single player game where user slice thrown fruits',
      techStack: ['Java'],
      image: `${import.meta.env.BASE_URL}assets/slice-it-min.webp`,
      source: 'github.com/FaaizHaikal/SliceIt',
    },
  ];

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1200) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount(); // Initial run
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, visibleCount);

  return (
    <section id="projects">
      <h2 className="heading">
        My <span>Projects</span>
      </h2>

      <div className="projects">
        {visibleProjects.map((project, idx) => (
          <div className="project" key={idx}>
            <img src={project.image} alt={project.title} loading="lazy" />
            <div className="project-info">
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <h6>Tech: {project.techStack.join(', ')}</h6>
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

      {projects.length > visibleCount && (
        <div className="project-toggle">
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
}

export default ProjectsPage;
