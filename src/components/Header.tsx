import { useEffect, useState } from 'react';
import './Header.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState<boolean>(false);

  useEffect(() => {
    const sections = document.querySelectorAll(
      'section'
    ) as NodeListOf<HTMLElement>;
    const contactSection = document.querySelector(
      '#contact'
    ) as HTMLElement | null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (!contactSection) return;
      const contactTop = contactSection.getBoundingClientRect().top;
      const headerHeightOffset = 60; // 60px
      if (contactTop <= headerHeightOffset) {
        setIsOverDarkSection(true);
      } else {
        setIsOverDarkSection(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`${isOverDarkSection || isMenuOpen ? 'theme-dark-bg' : ''}`}
    >
      <a href="#about" className="logo" onClick={handleNavLinkClick}>
        Faa'iz<span>.</span>
      </a>
      <div
        className={`menu-trigger ${isMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="burger-bar bar-top"></span>
        <span className="burger-bar bar-middle"></span>
        <span className="burger-bar bar-bottom"></span>
      </div>

      <nav className={isMenuOpen ? 'active' : ''}>
        <a
          href="#about"
          className={activeSection === 'about' ? 'active' : ''}
          onClick={handleNavLinkClick}
        >
          ABOUT
        </a>
        <a
          href="#experiences"
          className={activeSection === 'experiences' ? 'active' : ''}
          onClick={handleNavLinkClick}
        >
          EXPERIENCES
        </a>
        <a
          href="#contact"
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={handleNavLinkClick}
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
