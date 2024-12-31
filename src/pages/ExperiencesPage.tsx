import './ExperiencesPage.css';

function ExperiencesPage() {
  const experiences = [
    {
      title: 'AI Developer',
      company: 'SDPPI Kominfo',
      date: 'June 2024 - Dec 2024',
      logo: `${import.meta.env.BASE_URL}assets/kominfo.png`,
    },
    {
      title: 'Chief of Programming Division',
      company: 'ICHIRO ITS',
      date: 'Dec 2022 - Present',
      logo: `${import.meta.env.BASE_URL}assets/ichiro.jpeg`,
    },
  ];

  return (
    <section id="experiences">
      <div className="experiences-intro">
        <h2>
          My <span>Experiences</span>
        </h2>
        <p>
          Here are some of my experiences and lessons i've learned along the
          way.
        </p>

        <div className="btn-group">
          <a href="">My CV</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>

      <div className="experiences-content">
        {experiences.map((experiences) => (
          <div className="experience">
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
