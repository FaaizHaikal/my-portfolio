import { useEffect } from 'react';
import Navbar from './components/Header';
import AboutPage from './pages/AboutPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isScrolling = false;

    const scrollToSection = (index: number) => {
      isScrolling = true;
      sections[index].scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        isScrolling = false;
      }, 500);
    };

    const handleScroll = (event: WheelEvent) => {
      if (isScrolling) {
        event.preventDefault();
        return;
      }

      const currentSection = sections[currentSectionIndex];
      const atTop = currentSection.scrollTop === 0;
      const atBottom =
        currentSection.scrollHeight - currentSection.scrollTop ===
        currentSection.clientHeight;

      const delta = Math.sign(event.deltaY);

      if (delta > 0 && atBottom && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        scrollToSection(currentSectionIndex);
      } else if (delta < 0 && atTop && currentSectionIndex > 0) {
        currentSectionIndex--;
        scrollToSection(currentSectionIndex);
      }
    };

    sections.forEach((section) => {
      section.addEventListener('wheel', handleScroll, { passive: false });
    });

    return () => {
      sections.forEach((section) => {
        section.removeEventListener('wheel', handleScroll);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <AboutPage />
        <ExperiencesPage />
        <ProjectsPage />
        <ContactPage />
      </div>
    </>
  );
}

export default App;
