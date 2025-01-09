import { useEffect, useState } from 'react';
import './Header.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon') as HTMLElement | null;
    const closeIcon = document.querySelector('#close-icon') as HTMLElement | null;
    const nav = document.querySelector('nav') as HTMLElement | null;
    const sections = document.querySelectorAll('section') as NodeListOf<HTMLElement>;

    if (!menuIcon || !closeIcon || !nav) return;

    menuIcon.onclick = () => {
      nav.classList.add('active');
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    };

    closeIcon.onclick = () => {
      nav.classList.remove('active');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    };

    window.onresize = () => {
      if (window.innerWidth > 895) {
        nav.classList.remove('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'none';
      } else {
        if (nav.classList.contains('active')) {
          menuIcon.style.display = 'none';
          closeIcon.style.display = 'block';
        } else {
          menuIcon.style.display = 'block';
          closeIcon.style.display = 'none';
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 } // 50% of the section must be visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header>
      <a href="#about" className="logo">
        Faa'iz<span>.</span>
      </a>

      <i className="fa-solid fa-xmark hide" id="close-icon"></i>
      <i className="fa-solid fa-bars hide" id="menu-icon"></i>

      <nav>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
          About
        </a>
        <a href="#experiences" className={activeSection === 'experiences' ? 'active' : ''}>
          Experiences
        </a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
          Projects
        </a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
