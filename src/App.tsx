import { useEffect } from 'react';
import Navbar from './components/Header';
import AboutPage from './pages/AboutPage';
import ExperiencesPage from './pages/ExperiencesPage';

function App() {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const sections = document.querySelectorAll('section');
      const currentSectionIndex = Math.round(
        window.scrollY / window.innerHeight
      );
      const nextSectionIndex =
        event.deltaY > 0 ? currentSectionIndex + 1 : currentSectionIndex - 1;

      if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
        sections[nextSectionIndex].scrollIntoView({ behavior: 'smooth' });
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
      <AboutPage />
      <ExperiencesPage />
    </>
  );
}

export default App;
