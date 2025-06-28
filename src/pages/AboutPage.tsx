import TypingTexts from '../components/TypingTexts';
import ImageProfile from '../assets/faaiz.webp';
import './AboutPage.css';

function AboutPage() {
  const titles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Backend Developer',
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
          I’m a{' '}<span>final-year Computer Science student</span> at{' '}
          <span>Institut Teknologi Sepuluh Nopember</span>, 
          passionate about building real-world software, from 
          AI-powered systems to mobile and web apps.
        </p>

        <div className="socials">
          <a href="https://github.com/FaaizHaikal" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/faaizhaikal" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:faaizhaikal@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope"></i>
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
