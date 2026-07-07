import { useState } from 'react';
import './ExperiencesPage.css';

function ExperiencesPage() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const experiences = [
    {
      id: 'nbs',
      title: 'Backend Engineer',
      company: 'Nusantara Beta Studio',
      date: 'Sep 2025 - Mar 2026',
      logo: `${import.meta.env.BASE_URL}assets/ichiro.webp`,
      previewWork: `${import.meta.env.BASE_URL}assets/ichiro.webp`,
      description: `Developed microservice architecture comprising 13 services and web-based robot control interface, contributing to national and international wins.`,
    },
    {
      id: 'ichiro-robotics',
      title: 'Programmer',
      company: 'ICHIRO ITS Robotics Team',
      date: 'Dec 2022 - July 2025',
      logo: `${import.meta.env.BASE_URL}assets/ichiro.webp`,
      previewWork: `${import.meta.env.BASE_URL}assets/ichiro.webp`,
      description: `Developed microservice architecture comprising 13 services and web-based robot control interface, contributing to national and international wins.`,
    },
    {
      id: 'sdppi-kominfo',
      title: 'AI Software Developer',
      company: 'SDPPI Kominfo',
      date: 'Aug 2024 - Jan 2025',
      logo: `${import.meta.env.BASE_URL}assets/kominfo.webp`,
      previewWork: `${import.meta.env.BASE_URL}assets/ichiro.webp`,
      description: `Integrated face recognition and TTS into RAISA robot and built a full-stack registration web application to personalize customer service.`,
    },
  ];

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
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`experience ${hoveredIndex === index ? 'is-hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            onClick={() =>
              (window.location.href = `/my-portfolio/experiences/${exp.id}`)
            }
          >
            <div className="watermark-logo">
              <img src={exp.logo} alt="" />
            </div>

            <div className="date">
              <span>{exp.date}</span>
            </div>

            <div className="title-company">
              <h3>{exp.title}</h3>
              <h5>{exp.company}</h5>
            </div>

            <div className="view-project-cta">
              {hoveredIndex != index && (
                <div className="cta-decorator-circle"></div>
              )}
              <span className="cta-text">
                VIEW WORK <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>

            <div className="preview-work">
              <div className="preview-accent"></div>
              <img src={exp.previewWork} alt="Work preview" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperiencesPage;
