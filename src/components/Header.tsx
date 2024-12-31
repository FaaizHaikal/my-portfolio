import { useEffect } from 'react';
import './Header.css';

function Navbar() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          const sectionId = section.getAttribute('id');
          if (sectionId) {
            current = sectionId;
          }
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if ((link as HTMLAnchorElement).href.includes(current)) {
          link.classList.add('active');
        }
      });
    });
  }, []);

  return (
    <header>
      <a href="#about" className="logo">
        Faa'iz<span>.</span>
      </a>

      <nav>
        <a href="#about" className="active">
          About
        </a>
        <a href="#experiences">Experiences</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
