import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState<boolean>(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  useEffect(() => {
    if (!isHomePage) {
      setIsOverDarkSection(false);
      return;
    }

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
  }, [isHomePage, location.pathname]);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`${isOverDarkSection || isMenuOpen ? 'theme-dark-bg' : ''}`}
    >
      <Link to="/" className="logo" onClick={handleNavLinkClick}>
        Faa'iz<span>.</span>
      </Link>

      <div
        className={`menu-trigger ${isMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="burger-bar bar-top"></span>
        <span className="burger-bar bar-middle"></span>
        <span className="burger-bar bar-bottom"></span>
      </div>

      <nav className={isMenuOpen ? 'active' : ''}>
        <Link
          to="/#about"
          className={isHomePage && activeSection === 'about' ? 'active' : ''}
          onClick={handleNavLinkClick}
        >
          ABOUT
        </Link>
        <Link
          to="/#experiences"
          className={
            isHomePage && activeSection === 'experiences' ? 'active' : ''
          }
          onClick={handleNavLinkClick}
        >
          EXPERIENCES
        </Link>
        <Link
          to="/#contact"
          className={isHomePage && activeSection === 'contact' ? 'active' : ''}
          onClick={handleNavLinkClick}
        >
          CONTACT
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
