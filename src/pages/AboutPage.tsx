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
          I am an undergraduate student at the{' '}
          <span>Institute Technology of Sepuluh Nopember</span>, majoring in{' '}
          <span>Informatics Engineering</span>. I am passionate in{' '}
          <span>software development</span>.
        </p>
      </div>

      <div className="about-image">
        <img src={ImageProfile} alt="Faa'iz" />
      </div>
    </section>
  );
}

export default AboutPage;
