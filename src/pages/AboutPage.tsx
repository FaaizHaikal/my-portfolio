import { useState, useEffect } from 'react';
import ImageProfile from '../assets/faaiz.png';
import './AboutPage.css';

function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 895);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="about">
      {!isMobile && <div className="background-circle desktop-circle"></div>}
      <div className="about-content">
        <h1>
          <span>Faa'iz</span> Haikal Hilmi
        </h1>
        <h3>
          Backend Engineer <span>&</span> Robotics Engineer
        </h3>
        <p>
          A <span>Computer Science graduate</span> from{' '}
          <span>Institut Teknologi Sepuluh Nopember (ITS)</span> with experience
          in backend development and robotics software engineering.
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
        {isMobile && <div className="background-circle mobile-circle"></div>}
        <div className="background-text">X</div>
        <img src={ImageProfile} alt="Faa'iz" />
      </div>
    </section>
  );
}

export default AboutPage;
