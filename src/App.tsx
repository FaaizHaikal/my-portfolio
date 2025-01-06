import { useEffect, useRef } from 'react';
import Navbar from './components/Header';
import AboutPage from './pages/AboutPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!sectionsRef.current) return;

      const sections = Array.from(sectionsRef.current.children) as HTMLElement[];
      const viewportHeight = window.innerHeight;

      // Determine the current section index
      const currentIndex = sections.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2;
      });

      // Ignore if not a valid index
      if (currentIndex === -1) return;

      const isScrollingDown = event.deltaY > 0;
      const nextIndex = isScrollingDown
        ? Math.min(currentIndex + 1, sections.length - 1)
        : Math.max(currentIndex - 1, 0);

      if (currentIndex !== nextIndex) {
        event.preventDefault();
        sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div ref={sectionsRef}>
        <AboutPage />
        <ExperiencesPage />
        <ProjectsPage />
      </div>
    </>
  );
}

export default App;
