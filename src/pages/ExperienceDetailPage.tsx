import { useParams, Link, Navigate } from 'react-router-dom';
import './ExperienceDetailPage.css';
import experiencesJson from '../data/experiences.json';
import { ExperiencesDataMap } from '../types/experience';

function ExperienceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const experiences = experiencesJson as ExperiencesDataMap;
  const exp = id ? experiences[id] : undefined;

  if (!exp) {
    return <Navigate to="/" replace />;
  }

  return (
    <section id="experience-detail">
      <div className="company-hero">
        <Link to="/#experiences" className="back-link">
          <i className="fa-solid fa-arrow-left"></i> BACK TO WORK
        </Link>
        <span className="timeline-date">{exp.date}</span>
        <h1>{exp.company}</h1>
      </div>

      <div className="projects-container">
        {exp.projects.map((project, idx) => (
          <div key={idx} className="project-detail-block">
            <h2 className="project-title-name">{project.name}</h2>

            <div className="project-media-wrapper">
              <img src={`${import.meta.env.BASE_URL}/${project.image}`} />
            </div>

            <div className="marquee-wrapper">
              <div className="marquee-content">
                {[...project.techStack, ...project.techStack].map((tech, i) => (
                  <span key={i} className="marquee-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="metadata-table-format">
              <div className="table-row row-meta">
                <div className="table-cell">
                  <span className="cell-label">MY ROLE</span>
                  <div className="stack-vertical-list">
                    {project.roles.map((role, i) => (
                      <span key={i} className="cell-value">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="table-cell">
                  <span className="cell-label">DELIVERABLES</span>
                  <div className="stack-vertical-list">
                    {project.deliverables.map((item, i) => (
                      <span key={i} className="cell-value">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Date Baseline Column */}
                <div className="table-cell">
                  <span className="cell-label">TIMELINE</span>
                  <span className="cell-value">{project.date}</span>
                </div>
              </div>

              <div className="table-row row-description">
                <div className="desc-label">DESCRIPTION</div>
                <div className="desc-text-body">
                  {project.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceDetailPage;
