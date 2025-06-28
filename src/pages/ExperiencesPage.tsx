import './ExperiencesPage.css';

function ExperiencesPage() {
  const experiences = [
    {
      title: 'Programmer',
      company: 'ICHIRO ITS Robotics Team',
      date: 'Dec 2022 - July 2025',
      logo: `${import.meta.env.BASE_URL}assets/ichiro.webp`,
      description: `Developed microservice architecture comprising 13 services and web-based robot control interface, contributing to national and international wins.`,
    },
    {
      title: 'AI Software Developer',
      company: 'SDPPI Kominfo',
      date: 'Aug 2024 - Jan 2025',
      logo: `${import.meta.env.BASE_URL}assets/kominfo.webp`,
      description: `Integrated face recognition and TTS into RAISA robot and built a full-stack registration web application to personalize customer service.`,
    },
  ];

  return (
    <section id="experiences">
      <div className="experiences-intro">
        <h2>
          My <span>Experiences</span>
        </h2>
        <p>
          Here are some of my experiences and lessons I've learned along the
          way.
        </p>

        <div className="btn-group">
          <a
            href={`${import.meta.env.BASE_URL}assets/cv.pdf`}
            download="CV_Faa'iz Haikal Hilmi.pdf"
          >
            My CV
          </a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>

      <div className="experiences-content">
        {experiences.map((experiences) => (
          <div className="experience">
            <div className="description">
              <p>{experiences.description}</p>
            </div>
            <div className="date">
              <span>{experiences.date}</span>
            </div>
            <div className="title-company">
              <h3>{experiences.title}</h3>
              <h5>{experiences.company}</h5>
            </div>
            <div className="company-logo">
              <img src={experiences.logo} alt={experiences.company} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperiencesPage;
