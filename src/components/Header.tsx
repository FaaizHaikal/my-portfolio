import { useEffect } from 'react';
import './Header.css';

function Navbar() {
  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon') as HTMLElement | null;
    const closeIcon = document.querySelector(
      '#close-icon'
    ) as HTMLElement | null;
    const nav = document.querySelector('nav') as HTMLElement | null;
    const navLinks = document.querySelectorAll(
      'nav a'
    ) as NodeListOf<HTMLAnchorElement>;
    const sections = document.querySelectorAll(
      'section'
    ) as NodeListOf<HTMLElement>;

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

    window.onscroll = () => {
      sections.forEach((section) => {
        const id = section.id;
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
          navLinks.forEach((navLink) => {
            navLink.classList.remove('active');
            if (navLink.href.includes(`#${id}`)) {
              navLink.classList.add('active');
            }
          });
        }
      });
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
