import TypingTexts from '../components/TypingTexts';
import ImageProfile from '../assets/faaiz.png';
import './AboutPage.css';

function AboutPage() {
  const titles = [
    'College Student',
    'Software Developer',
    'Robotics Programmer',
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
          I am an undergraduate student at the{' '}
          <span>Institute Technology of Sepuluh Nopember</span>, majoring in{' '}
          <span>Informatics Engineering</span>. I am passionate in{' '}
          <span>software development</span>.
        </p>

        <div className="btn-group">
          <a href="">My CV</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>

      <div className="about-image">
        <img src={ImageProfile} alt="" />
      </div>
    </section>
  );
}

export default AboutPage;
