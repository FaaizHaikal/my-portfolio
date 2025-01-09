import Navbar from './components/Header';
import AboutPage from './pages/AboutPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
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
