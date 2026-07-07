import Navbar from './components/Header';
import AboutPage from './pages/AboutPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <AboutPage />
        <ExperiencesPage />
        <ContactPage />
      </div>
    </>
  );
}

export default App;
