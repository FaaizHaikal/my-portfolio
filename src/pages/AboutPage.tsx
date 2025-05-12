import TypingTexts from '../components/TypingTexts';
import ImageProfile from '../assets/faaiz.png';
import './AboutPage.css';

function AboutPage() {
  const titles = [
    'Software Developer',
    'Backend Developer',
    'Robotics Programmer',
  ];

  return (
    <section id="about">
      <div className="about-content">
        <h1>
          Hi, I am <span>Faa'iz</span>
        </h1>
        <h3>
          I am a{' '}
          <span className="typed">
            <TypingTexts texts={titles} speed={30} backSpeed={50} />
          </span>
        </h3>
        <p>
          I'm an undergraduate student at the{' '}
          <span>Institute Technology of Sepuluh Nopember</span>, majoring in{' '}
          <span>Informatics Engineering</span>. I'm passionate in{' '}
          <span>software development</span>.
        </p>

        <div className="socials">
          <a href="https://github.com/FaaizHaikal" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/faaizhaikal" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/faaizhilmi" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="about-image">
        <img src={ImageProfile} alt="Faa'iz" />
      </div>
    </section>
  );
}

export default AboutPage;
