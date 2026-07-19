import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExperiencesPage.css';
import experiencesJson from '../data/experiences.json';
import { ExperiencesDataMap } from '../types/experience';

function ExperiencesPage() {
  const experiences = experiencesJson as ExperiencesDataMap;
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  return (
    <section id="experiences">
      <div className="experiences-intro">
        <h2>My Experiences</h2>
        <p>
          Here are some of my experiences and lessons I've learned along the
          way.
        </p>
      </div>

      <div className="experiences-content">
        {Object.entries(experiences).map(([expId, exp], index) => (
          <div
            key={expId}
            className={`experience ${hoveredIndex === index ? 'is-hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            onClick={() => navigate(`/experiences/${expId}`)}
          >
            <div className="watermark-logo">
              <img src={`${import.meta.env.BASE_URL}/${exp.logo}`} alt="" />
            </div>

            <div className="date">
              <span>{exp.date}</span>
            </div>

            <div className="title-company">
              <h3>{exp.title}</h3>
              <h5>{exp.company}</h5>
              <p className="exp-summary">{exp.summary}</p>
            </div>

            <div className="view-project-cta">
              {hoveredIndex !== index && (
                <div className="cta-decorator-circle"></div>
              )}
              <span className="cta-text">
                VIEW WORK <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>

            <div className="preview-work">
              <div className="preview-accent"></div>
              <img
                src={`${import.meta.env.BASE_URL}/${exp.previewWork}`}
                alt="Work preview"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperiencesPage;
